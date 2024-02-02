import { EnvValidator } from './validator/env-validator';
import { ADMIN_ENV_VALIDATION_SCHEMA } from './schemas/admin';
import { BACKEND_ENV_VALIDATION_SCHEMA } from './schemas/backend';

export const adminEnvValidator = new EnvValidator(ADMIN_ENV_VALIDATION_SCHEMA);
export const backendEnvValidator = new EnvValidator(BACKEND_ENV_VALIDATION_SCHEMA);

export type { AdminEnvironment } from './schemas/admin';
export type { BackendEnvironment } from './schemas/backend';
