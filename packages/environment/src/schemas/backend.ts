import * as joi from 'joi';
import { COMMON_ENV_VALIDATION_SCHEMA } from './common';

export const BACKEND_ENV_VALIDATION_SCHEMA = {
  ...COMMON_ENV_VALIDATION_SCHEMA,
  DATABASE_URL: joi.string().required(),
  JWT_SECRET: joi.string().required(),
  ADMIN_URL: joi.string().required(),
  FRONTEND_URL: joi.string().required(),
  BACKEND_URL: joi.string().required(),
  BCRYPT_SALT: joi.number().required(),
};

export type BackendEnvironment = {
  [P in keyof typeof BACKEND_ENV_VALIDATION_SCHEMA]: (typeof BACKEND_ENV_VALIDATION_SCHEMA)[P] extends string
    ? (typeof BACKEND_ENV_VALIDATION_SCHEMA)[P]
    : string;
};
