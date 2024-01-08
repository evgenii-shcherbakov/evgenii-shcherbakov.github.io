import { resolve } from 'path';

export const PROJECT_ROOT_PATH = resolve(__dirname, '../../..');

export const BACKEND_ROOT_PATH = resolve(PROJECT_ROOT_PATH, 'backend');
export const ADMIN_ROOT_PATH = resolve(PROJECT_ROOT_PATH, 'admin');
export const FRONTEND_ROOT_PATH = resolve(PROJECT_ROOT_PATH, 'frontend');

export const BACKEND_ENV_FILE_PATH = resolve(BACKEND_ROOT_PATH, '.env');
export const ADMIN_ENV_FILE_PATH = resolve(ADMIN_ROOT_PATH, '.env');
export const FRONTEND_ENV_FILE_PATH = resolve(FRONTEND_ROOT_PATH, '.env');
