import Joi from 'joi';
import { COMMON_ENV_VALIDATION_SCHEMA } from './common';

export const BACKEND_ENV_VALIDATION_SCHEMA = {
  ...COMMON_ENV_VALIDATION_SCHEMA,
  DATABASE_URL: Joi.string().required(),
  JWT_SECRET: Joi.string().required(),
  BCRYPT_SALT: Joi.number().required(),
  VERCEL_API_URL: Joi.string().required(),
  VERCEL_TOKEN: Joi.string().required(),
  VERCEL_BACKEND_PROJECT_ID: Joi.string().required(),
  VERCEL_ADMIN_PROJECT_ID: Joi.string().required(),
  VERCEL_FRONTEND_PROJECT_ID: Joi.string().required(),
};

export type BackendEnvironment = {
  [P in keyof typeof BACKEND_ENV_VALIDATION_SCHEMA]: (typeof BACKEND_ENV_VALIDATION_SCHEMA)[P] extends string
    ? (typeof BACKEND_ENV_VALIDATION_SCHEMA)[P]
    : string;
};
