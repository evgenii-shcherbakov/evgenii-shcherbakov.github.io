import Joi from 'joi';

export const CommonSchema = {
  PORT: Joi.alternatives<string | number>(Joi.string(), Joi.number()).optional(),
  NODE_ENV: Joi.string<'development' | 'production'>()
    .valid('development', 'production')
    .optional(),
};
