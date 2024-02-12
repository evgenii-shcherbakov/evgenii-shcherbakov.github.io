import { EnvValidator } from './validator/env-validator';
import { ADMIN_ENV_VALIDATION_SCHEMA, AdminEnvironment } from './schemas/admin';
import { BACKEND_ENV_VALIDATION_SCHEMA, BackendEnvironment } from './schemas/backend';
import { FRONTEND_ENV_VALIDATION_SCHEMA, FrontendEnvironment } from './schemas/frontend';
import { DEPLOY_ENV_VALIDATION_SCHEMA, DeployEnvironment } from './schemas/deploy';

export const adminEnvValidator = new EnvValidator(ADMIN_ENV_VALIDATION_SCHEMA);
export const backendEnvValidator = new EnvValidator(BACKEND_ENV_VALIDATION_SCHEMA);
export const frontendEnvValidator = new EnvValidator(FRONTEND_ENV_VALIDATION_SCHEMA);
export const deployEnvValidator = new EnvValidator(DEPLOY_ENV_VALIDATION_SCHEMA);

export type {
  AdminEnvironment,
  BackendEnvironment,
  DeployEnvironment,
  FrontendEnvironment,
  EnvValidator,
};
