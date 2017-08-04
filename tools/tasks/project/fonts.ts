import { Sparky } from 'fuse-box';
import { BUILD_CONFIG, taskName } from '../../config/build.config';

// An example task stub
Sparky.task(taskName(__filename), () => 
  Sparky.src('./**', { base: `./node_modules/font-awesome/fonts` })
        .dest(`./${BUILD_CONFIG.outputDir}/assets/fonts/font-awesome`));