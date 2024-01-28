import { BackendEnvironment } from '@shared/environment';

declare global {
  namespace NodeJS {
    interface ProcessEnv extends BackendEnvironment {}
  }
}

export {};
