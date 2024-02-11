import { adminEnvValidator, backendEnvValidator, frontendEnvValidator } from '@shared/environment';
import { DeployProject } from '../types';

export const PROJECTS: DeployProject[] = [
  {
    id: process.env.VERCEL_ADMIN_PROJECT_ID ?? '',
    name: 'admin',
    validator: adminEnvValidator,
  },
  {
    id: process.env.VERCEL_BACKEND_PROJECT_ID ?? '',
    name: 'backend',
    validator: backendEnvValidator,
  },
  {
    id: process.env.VERCEL_FRONTEND_PROJECT_ID ?? '',
    name: 'frontend',
    validator: frontendEnvValidator,
  },
];
