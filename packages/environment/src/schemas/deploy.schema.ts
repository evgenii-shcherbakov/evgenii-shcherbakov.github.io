import Joi from 'joi';
import { CommonSchema } from './common.schema';

export const DeploySchema = {
  ...CommonSchema,
  CI: Joi.string<'true' | 'false'>().valid('true', 'false').optional(),
  VERCEL_TOKEN: Joi.string().required(),
  VERCEL_API_URL: Joi.string().required(),
  VERCEL_BACKEND_PROJECT_ID: Joi.string().required(),
  VERCEL_BACKEND_APP_NAME: Joi.string().required(),
  VERCEL_ADMIN_PROJECT_ID: Joi.string().required(),
  VERCEL_ADMIN_APP_NAME: Joi.string().required(),
  VERCEL_FRONTEND_PROJECT_ID: Joi.string().required(),
  VERCEL_FRONTEND_APP_NAME: Joi.string().required(),
  GITHUB_REPOSITORY_URL: Joi.string().required(),
  GITHUB_COMMIT_MESSAGE: Joi.string().required(),
  GITHUB_COMMITTER: Joi.string().required(),
};
