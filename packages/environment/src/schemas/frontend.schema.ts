import { CommonSchema } from './common.schema';
import Joi from 'joi';

export const FrontendSchema = {
  ...CommonSchema,
  NEXT_PUBLIC_BACKEND_URL: Joi.string().uri().required(),
};
