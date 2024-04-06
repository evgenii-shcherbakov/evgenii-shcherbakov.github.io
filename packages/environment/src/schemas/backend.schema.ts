import Joi from 'joi';
import { CommonSchema } from './common.schema';

export const BackendSchema = {
  ...CommonSchema,
  DATABASE_URL: Joi.string().required(),
  JWT_SECRET: Joi.string().required(),
  BCRYPT_SALT: Joi.number().required(),
  VERCEL_API_URL: Joi.string().required(),
  VERCEL_TOKEN: Joi.string().required(),
  VERCEL_BACKEND_PROJECT_ID: Joi.string().required(),
  VERCEL_ADMIN_PROJECT_ID: Joi.string().required(),
  VERCEL_FRONTEND_PROJECT_ID: Joi.string().required(),
};
