import { EnvConfig } from '../config/app.config';

const BaseConfig: EnvConfig = {
  name: "Patrick Michalina",
  description: "Personal homepage of Patrick Michalina",
  pageTitleSeparator: " - ",
  endpoints: {
    api: 'http://localhost:1338/api',
    cdn: 'http://localhost:8083'
  },
  og: {
    defaultSocialImage: "",
    facebookAppId: ""
  },
  server: {
    host: "http://localhost",
    port: 8083,
    minifyIndex: false
  }
};

export = BaseConfig;