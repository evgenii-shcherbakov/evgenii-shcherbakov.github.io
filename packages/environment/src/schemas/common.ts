import * as joi from 'joi';

export const COMMON_ENV_VALIDATION_SCHEMA = {
  PORT: joi.alternatives(joi.string(), joi.number()),
  NODE_ENV: joi.string().valid('development', 'production').optional(),
};
