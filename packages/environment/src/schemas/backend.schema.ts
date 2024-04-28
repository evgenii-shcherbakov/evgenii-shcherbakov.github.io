import Joi from 'joi';
import { CommonSchema } from './common.schema';

export const BackendSchema = {
  ...CommonSchema,
  DATABASE_URL: Joi.string().required(),
  // JWT_SECRET: Joi.string().required(),
  // BCRYPT_SALT: Joi.number().required(),
  GRPC_PORT: Joi.alternatives<string | number>(Joi.string(), Joi.number()).optional(),
  // PROTOC_PATH: Joi.string().required(),
};
