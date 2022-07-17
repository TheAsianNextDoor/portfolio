declare global {
  namespace NodeJS {
    interface ProcessEnv {
      WEB_NAME: 'local' | 'test' | 'production';
      WEB_NODE_ENV: 'development' | 'production';
      WEB_OKTA_CLIENT_ID: string;
      WEB_OKTA_ISSUER: string;
      WEB_OKTA_REDIRECT_URI: string;
      WEB_STUDY_PARTICIPATION_HOST_NAME: string;
    }
  }
}
