import Joi from 'joi';

export const CommonSchema = {
  PORT: Joi.alternatives<string | number>(Joi.string(), Joi.number()).optional(),
  NODE_ENV: Joi.string().valid('development', 'production').optional(),
};
