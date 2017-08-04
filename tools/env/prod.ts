import { EnvConfig } from '../config/app.config';
import * as base from './base';

const ProdConfig: EnvConfig = { 
  ...base,
  env: 'prod',
  endpoints: {
    api: 'http://localhost:1338/api',
    cdn: 'https://patrickmichalina-8724.kxcdn.com'
  },
  server: {
    host: "https://patrickmichalina.com",
    minifyIndex: true,
    prodMode: true,
    port: 8083
  }
};

export = ProdConfig;