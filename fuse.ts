import { Ng2TemplatePlugin } from 'ng2-fused';
import { argv } from 'yargs';
import { BUILD_CONFIG, ENV_CONFIG_INSTANCE, isProdBuild, cachebuster, cdn } from './tools/config/build.config';
import { NgLazyPlugin } from './tools/plugins/ng-lazy';
import { Plugin } from 'fuse-box/src/core/WorkflowContext';
import {
  EnvPlugin,
  FuseBox,
  HTMLPlugin,
  JSONPlugin,
  RawPlugin,
  SassPlugin,
  Sparky,
  UglifyESPlugin
} from 'fuse-box';
import { readFileSync, writeFileSync } from 'fs';
import './tools/tasks';

const isAot = argv.aot;
const isBuildServer = argv.ci;
const baseEntry = isAot ? 'main.aot' : 'main';
const mainEntryFileName = isProdBuild ? `${baseEntry}-prod` : `${baseEntry}`;
const appBundleName = isProdBuild ? `js/app-${cachebuster}` : `js/app`;
const vendorBundleName = isProdBuild ? `js/_vendor-${cachebuster}` : `js/_vendors`;
const vendorBundleInstructions = ` ~ client/${mainEntryFileName}.ts`;
const serverBundleInstructions = ' > [server/server.ts]';
const appBundleInstructions = ` !> [client/${mainEntryFileName}.ts]`;

const options: any = {
  homeDir: './src',
  output: `${BUILD_CONFIG.outputDir}/$name.js`,
  experimentalFeatures: false,
  sourceMaps: isProdBuild || process.env.CI
    ? { project: false, vendor: false, inline: false }
    : { project: true, vendor: true, inline: true },
  target: 'browser',
  cache: false,
  plugins: [
    EnvPlugin(ENV_CONFIG_INSTANCE), // Leave this as first plugin
    isProdBuild && UglifyESPlugin(),
    NgLazyPlugin({
      cdn,
      angularAppEntry: '',
      angularAppRoot: 'src/client/app',
      angularBundle: appBundleName,
      aot: isAot
    }),
    Ng2TemplatePlugin(),
    ['*.component.html', RawPlugin()],
    ['*.component.scss',
      SassPlugin({ indentedSyntax: false, importer: true, sourceMap: false, outputStyle: 'compressed' } as any), RawPlugin()],
    JSONPlugin(),
    HTMLPlugin({ useDefault: false }),

  ] as Plugin[]
};

Sparky.task('build', () => {
  const fuse = FuseBox.init(options as any);
  const path = isAot ? 'client/.aot/src/client/app' : 'client/app';
  const vendorBundle = fuse.bundle(`${vendorBundleName}`).instructions(vendorBundleInstructions);
  const appBundle = fuse.bundle(appBundleName)
    .instructions(`${appBundleInstructions} + [${path}/**/!(*.spec|*.e2e-spec|*.ngsummary|*.snap).*]`)
    .plugin([EnvPlugin(ENV_CONFIG_INSTANCE)]);
  const serverBundle = fuse.bundle('server')
    .sourceMaps({ project: false, vendor: false, inline: false })
    .instructions(serverBundleInstructions);

  if (!isBuildServer && !argv['build-only']) {
    vendorBundle.watch();
    appBundle.watch()

    if (argv.spa) {
      fuse.dev({ port: ENV_CONFIG_INSTANCE.server.port, root: 'dist', open : true });
      vendorBundle.hmr();
      appBundle.hmr();
    } else {
      serverBundle.completed(proc => {
        if (cdn) removeCdn(proc, cdn);

        proc.start()
      }).watch();
    }
  } else {
    serverBundle.completed(proc => {
      if (cdn) removeCdn(proc, cdn);
    })
  }

  return fuse.run();
});

Sparky.task('serve', () => {
  return Sparky.start('clean')
    .then(() => argv.aot ? Sparky.start('ngc') : Promise.resolve())
    .then(() => Sparky.start('web'))
    .then(() => Sparky.start('index.copy'))
    .then(() => Sparky.start('assets'))
    .then(() => Sparky.start('fonts'))
    .then(() => isProdBuild || !BUILD_CONFIG.skipFaviconGenerationOnDev ? Sparky.start('favicons') : Promise.resolve())
    .then(() => Sparky.start('sass'))
    .then(() => Sparky.start('sass.files'))
    .then(() => Sparky.start('build'))
    .then(() => Sparky.start('js.files'))
    .then(() => Sparky.start('index.inject'))
    .then(() => Sparky.start('index.minify'))
    .then(() => Sparky.start('banner'));
});

const removeCdn = (proc: any, cdnHost: string) => {
  var file = readFileSync(proc.filePath, 'utf-8');
  const cdnRemoved = file.replace(new RegExp(cdnHost.replace('https:', ''), 'g'), '.');
  writeFileSync(proc.filePath, cdnRemoved, { encoding: 'utf-8' });
}