import { COMMON_ENV_VALIDATION_SCHEMA } from './common';
import Joi from 'joi';

export const DEPLOY_ENV_VALIDATION_SCHEMA = {
  ...COMMON_ENV_VALIDATION_SCHEMA,
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

export type DeployEnvironment = {
  [P in keyof typeof DEPLOY_ENV_VALIDATION_SCHEMA]: (typeof DEPLOY_ENV_VALIDATION_SCHEMA)[P] extends string
    ? (typeof DEPLOY_ENV_VALIDATION_SCHEMA)[P]
    : string;
};
