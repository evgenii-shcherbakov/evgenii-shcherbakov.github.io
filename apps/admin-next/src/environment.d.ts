import { AdminEnvironment } from '@shared/environment';

declare global {
  namespace NodeJS {
    interface ProcessEnv extends AdminEnvironment {}
  }
}

export {};
