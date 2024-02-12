import { config } from 'dotenv';
import { adminEnvValidator, backendEnvValidator, frontendEnvValidator } from '@shared/environment';
import { HttpService } from '@shared/core';
import { DeployProject } from '@types';
import { APPS_ROOT } from '@constants/paths';

config();

export const DEPLOYMENT_API_URL = 'https://api.vercel.com';
export const DEPLOYMENT_TOKEN = process.env.VERCEL_TOKEN;

const apiService = new HttpService(DEPLOYMENT_API_URL);

apiService.interceptors.request.use((config) => {
  return {
    ...config,
    headers: {
      ...(config.headers ?? {}),
      Authorization: `Bearer ${DEPLOYMENT_TOKEN}`,
    },
  };
});

export const PROJECTS: DeployProject[] = [
  {
    id: process.env.VERCEL_ADMIN_PROJECT_ID ?? '',
    name: 'admin',
    path: `${APPS_ROOT}/admin`,
    includes: [],
    appName: process.env.VERCEL_ADMIN_APP_NAME ?? '',
    validator: adminEnvValidator,
  },
  {
    id: process.env.VERCEL_BACKEND_PROJECT_ID ?? '',
    name: 'backend',
    path: `${APPS_ROOT}/backend`,
    includes: [`${APPS_ROOT}/backend/dist`],
    appName: process.env.VERCEL_BACKEND_APP_NAME ?? '',
    validator: backendEnvValidator,
    prepareCommand: `
      echo Build...
      npm run build:backend
    `,
  },
  {
    id: process.env.VERCEL_FRONTEND_PROJECT_ID ?? '',
    name: 'frontend',
    path: `${APPS_ROOT}/frontend`,
    includes: [],
    appName: process.env.VERCEL_FRONTEND_APP_NAME ?? '',
    validator: frontendEnvValidator,
    prepareCommand: `
      echo Generate frontend serverless function entrypoint...
      npx turbo gen api --args angular ../apps/frontend/dist/frontend/server/server.mjs
    `,
  },
];

export { apiService };
