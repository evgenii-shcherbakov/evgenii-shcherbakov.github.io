import { EnvValidator } from './validator/env-validator';
import { ADMIN_ENV_VALIDATION_SCHEMA } from './schemas/admin';
import { BACKEND_ENV_VALIDATION_SCHEMA } from './schemas/backend';
import { FRONTEND_ENV_VALIDATION_SCHEMA } from './schemas/frontend';

export const adminEnvValidator = new EnvValidator(ADMIN_ENV_VALIDATION_SCHEMA);
export const backendEnvValidator = new EnvValidator(BACKEND_ENV_VALIDATION_SCHEMA);
export const frontendEnvValidator = new EnvValidator(FRONTEND_ENV_VALIDATION_SCHEMA);

export type { AdminEnvironment } from './schemas/admin';
export type { BackendEnvironment } from './schemas/backend';
export type { FrontendEnvironment } from './schemas/frontend';

export type { EnvValidator } from './validator/env-validator';
