import Joi from 'joi';
import { COMMON_ENV_VALIDATION_SCHEMA } from './common';

export const BACKEND_ENV_VALIDATION_SCHEMA = {
  ...COMMON_ENV_VALIDATION_SCHEMA,
  DATABASE_URL: Joi.string().required(),
  JWT_SECRET: Joi.string().required(),
  ADMIN_URL: Joi.string().required(),
  FRONTEND_URL: Joi.string().required(),
  BACKEND_URL: Joi.string().required(),
  BCRYPT_SALT: Joi.number().required(),
};

export type BackendEnvironment = {
  [P in keyof typeof BACKEND_ENV_VALIDATION_SCHEMA]: (typeof BACKEND_ENV_VALIDATION_SCHEMA)[P] extends string
    ? (typeof BACKEND_ENV_VALIDATION_SCHEMA)[P]
    : string;
};
