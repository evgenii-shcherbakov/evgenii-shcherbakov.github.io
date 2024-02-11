import { COMMON_ENV_VALIDATION_SCHEMA } from './common';

export const FRONTEND_ENV_VALIDATION_SCHEMA = {
  ...COMMON_ENV_VALIDATION_SCHEMA,
};

export type FrontendEnvironment = {
  [P in keyof typeof FRONTEND_ENV_VALIDATION_SCHEMA]: (typeof FRONTEND_ENV_VALIDATION_SCHEMA)[P] extends string
    ? (typeof FRONTEND_ENV_VALIDATION_SCHEMA)[P]
    : string;
};
