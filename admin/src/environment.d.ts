import { AdminEnvironment } from '@shared/types/env-validation';

declare global {
  namespace NodeJS {
    interface ProcessEnv extends AdminEnvironment {}
  }
}

export {};
