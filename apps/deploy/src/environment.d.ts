import { DeployEnvironment } from '@packages/environment';

declare global {
  namespace NodeJS {
    interface ProcessEnv extends DeployEnvironment {}
  }
}

export {};
