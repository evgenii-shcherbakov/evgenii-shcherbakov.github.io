import * as joi from 'joi';

const COMMON_ENV_VALIDATION_SCHEMA = {
  PORT: joi.alternatives(joi.string(), joi.number()),
  NODE_ENV: joi.string().valid('development', 'production').optional(),
};

export const ADMIN_ENV_VALIDATION_SCHEMA = {
  ...COMMON_ENV_VALIDATION_SCHEMA,
  DATABASE_URL: joi.string().required(),
  PAYLOAD_SECRET: joi.string().required(),
  BACKEND_URL: joi.string().required(),
  NEXT_PUBLIC_BACKEND_URL: joi.string(),
  AUTH_TOKEN: joi.string().required(),
  NEXT_PUBLIC_AUTH_TOKEN: joi.string(),
};

export const BACKEND_ENV_VALIDATION_SCHEMA = {
  ...COMMON_ENV_VALIDATION_SCHEMA,
  DATABASE_URL: joi.string().required(),
  JWT_SECRET: joi.string().required(),
};

export const BACKEND_ENV_VALIDATOR = joi.object(BACKEND_ENV_VALIDATION_SCHEMA);
