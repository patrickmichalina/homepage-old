export interface EnvConfig {
  name: string;
  description: string;
  pageTitleSeparator: string;
  endpoints: {
    api?: string,
    cdn?: string
  },
  og: {
    defaultSocialImage: string,
    facebookAppId: string
  }
  server: {
    host: string;
    port: number;
    minifyIndex: boolean;
    prodMode?: boolean;
  },
  env?: string;
}
