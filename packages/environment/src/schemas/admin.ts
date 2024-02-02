import * as joi from 'joi';
import { COMMON_ENV_VALIDATION_SCHEMA } from './common';

export const ADMIN_ENV_VALIDATION_SCHEMA = {
  ...COMMON_ENV_VALIDATION_SCHEMA,
  VITE_DATABASE_URL: joi.string().required(),
  // PAYLOAD_SECRET: joi.string().required(),
  VITE_BACKEND_URL: joi.string().required(),
  // NEXT_PUBLIC_BACKEND_URL: joi.string(),
  VITE_AUTH_TOKEN: joi.string().required(),
  // NEXT_PUBLIC_AUTH_TOKEN: joi.string(),
};

export type AdminEnvironment = {
  [P in keyof typeof ADMIN_ENV_VALIDATION_SCHEMA]: (typeof ADMIN_ENV_VALIDATION_SCHEMA)[P] extends string
    ? (typeof ADMIN_ENV_VALIDATION_SCHEMA)[P]
    : string;
};
