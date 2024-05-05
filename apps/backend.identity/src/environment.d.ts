import { BackendIdentityEnvironment } from '@packages/environment';

declare global {
  namespace NodeJS {
    interface ProcessEnv extends BackendIdentityEnvironment {}
  }
}

export {};
