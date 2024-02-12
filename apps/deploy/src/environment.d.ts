import { DeployEnvironment } from '@shared/environment';

declare global {
  namespace NodeJS {
    interface ProcessEnv extends DeployEnvironment {}
  }
}

export {};
