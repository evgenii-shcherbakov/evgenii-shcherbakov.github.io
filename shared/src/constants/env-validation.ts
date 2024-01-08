import * as joi from 'joi';

const COMMON_ENV_VALIDATION_SCHEMA = {
  PORT: joi.number().required(),
};

export const ADMIN_ENV_VALIDATION_SCHEMA = {
  ...COMMON_ENV_VALIDATION_SCHEMA,
  DATABASE_URL: joi.string().required(),
  PAYLOAD_SECRET: joi.string().required(),
};

export const BACKEND_ENV_VALIDATION_SCHEMA = {
  ...COMMON_ENV_VALIDATION_SCHEMA,
  DATABASE_URL: joi.string().required(),
};

export const BACKEND_ENV_VALIDATOR = joi.object(BACKEND_ENV_VALIDATION_SCHEMA);
