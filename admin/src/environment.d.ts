import { AdminEnvironment } from '@shared/environment/types/env-validation';

declare global {
  namespace NodeJS {
    interface ProcessEnv extends AdminEnvironment {}
  }
}

export {};
