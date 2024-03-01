import Joi from 'joi';
import { CommonSchema } from './common.schema';

export const AdminSchema = {
  ...CommonSchema,
  NEXT_PUBLIC_BACKEND_URL: Joi.string().required(),
  DATABASE_URL: Joi.string().required(),
  BCRYPT_SALT: Joi.number().required(),
};
