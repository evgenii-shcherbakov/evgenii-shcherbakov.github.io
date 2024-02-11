import Joi from 'joi';

export const COMMON_ENV_VALIDATION_SCHEMA = {
  PORT: Joi.alternatives(Joi.string(), Joi.number()).optional(),
  NODE_ENV: Joi.string().valid('development', 'production').optional(),
};
