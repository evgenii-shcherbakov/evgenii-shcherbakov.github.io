import { resolve } from 'node:path';

export const PROJECT_ROOT_PATH = resolve(__dirname, '../../..');

export const BACKEND_ROOT_PATH = resolve(PROJECT_ROOT_PATH, 'backend');
export const ADMIN_ROOT_PATH = resolve(PROJECT_ROOT_PATH, 'admin');
export const FRONTEND_ROOT_PATH = resolve(PROJECT_ROOT_PATH, 'frontend');

export const BACKEND_ENV_FILE_PATH = resolve(BACKEND_ROOT_PATH, '.env');
export const ADMIN_ENV_FILE_PATH = resolve(ADMIN_ROOT_PATH, '.env');
export const FRONTEND_ENV_FILE_PATH = resolve(FRONTEND_ROOT_PATH, '.env');

export const BACKEND_PUBLIC_DIR_PATH = resolve(BACKEND_ROOT_PATH, 'public');
//
// const ADMIN_PAYLOAD_PATH = resolve(ADMIN_ROOT_PATH, 'src/payload');
//
// export const ADMIN_GENERATED_PAYLOAD_TYPES_PATH = resolve(
//   ADMIN_PAYLOAD_PATH,
//   'types/payload-types.ts',
// );
// export const ADMIN_GENERATED_GRAPHQL_SCHEMA_PATH = resolve(
//   ADMIN_PAYLOAD_PATH,
//   'graphql/generated-schema.graphql',
// );
