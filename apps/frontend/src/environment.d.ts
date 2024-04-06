import { FrontendEnvironment } from '@packages/environment';

declare global {
  namespace NodeJS {
    interface ProcessEnv extends FrontendEnvironment {}
  }
}

export {};
