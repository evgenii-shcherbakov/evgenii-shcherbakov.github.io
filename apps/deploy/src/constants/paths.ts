import { resolve } from 'node:path';

export const REPOSITORY_ROOT = resolve(__dirname, '../../../..');

export const APPS_ROOT = resolve(REPOSITORY_ROOT, 'apps');
export const BUILD_ROOT = resolve(REPOSITORY_ROOT, 'build');
