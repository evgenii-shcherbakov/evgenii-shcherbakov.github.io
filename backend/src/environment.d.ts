import { BackendEnvironment } from '@shared/environment/types/env-validation';

declare global {
  namespace NodeJS {
    interface ProcessEnv extends BackendEnvironment {}
  }
}

export {};
