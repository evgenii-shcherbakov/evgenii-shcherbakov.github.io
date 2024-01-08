import { BackendEnvironment } from '@shared/types/env-validation';

declare global {
  namespace NodeJS {
    interface ProcessEnv extends BackendEnvironment {}
  }
}

export {};
