import {
  ADMIN_ENV_VALIDATION_SCHEMA,
  BACKEND_ENV_VALIDATION_SCHEMA,
} from '@shared/environment/constants/env-validation';

export type AdminEnvironment = {
  [P in keyof typeof ADMIN_ENV_VALIDATION_SCHEMA]: (typeof ADMIN_ENV_VALIDATION_SCHEMA)[P] extends string
    ? (typeof ADMIN_ENV_VALIDATION_SCHEMA)[P]
    : string;
};

export type BackendEnvironment = {
  [P in keyof typeof BACKEND_ENV_VALIDATION_SCHEMA]: (typeof BACKEND_ENV_VALIDATION_SCHEMA)[P] extends string
    ? (typeof BACKEND_ENV_VALIDATION_SCHEMA)[P]
    : string;
};
