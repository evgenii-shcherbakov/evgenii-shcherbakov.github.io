import { ProjectEntity } from '@modules/project/entities/project.entity';
import { ConfigService } from '@modules/config/services/config.service';
import {
  adminEnvValidator,
  backendEnvValidator,
  DeployEnvironment,
  frontendEnvValidator,
} from '@packages/environment';
import { join, resolve } from 'node:path';
import { APPS_ROOT } from '@constants/paths';

export default function (configService: ConfigService<DeployEnvironment>): ProjectEntity[] {
  return [
    {
      id: configService.get('VERCEL_BACKEND_PROJECT_ID') ?? '',
      name: 'backend',
      path: resolve(APPS_ROOT, 'backend'),
      watch: [join('apps', 'backend'), 'packages', join('apps', 'deploy')],
      appName: configService.get('VERCEL_BACKEND_APP_NAME') ?? '',
      validator: backendEnvValidator,
      prepareCommands: ['npm install', 'npm run build:backend'],
      configPath: join(APPS_ROOT, 'backend/vercel.json'),
    },
    {
      id: configService.get('VERCEL_ADMIN_PROJECT_ID') ?? '',
      name: 'admin',
      path: resolve(APPS_ROOT, 'admin'),
      watch: [join('apps', 'admin'), 'packages', join('apps', 'deploy')],
      appName: configService.get('VERCEL_ADMIN_APP_NAME') ?? '',
      validator: adminEnvValidator,
      configPath: join(APPS_ROOT, 'admin/vercel.json'),
    },
    {
      id: configService.get('VERCEL_FRONTEND_PROJECT_ID') ?? '',
      name: 'frontend',
      path: resolve(APPS_ROOT, 'frontend'),
      watch: [join('apps', 'frontend'), 'packages', join('apps', 'deploy')],
      appName: configService.get('VERCEL_FRONTEND_APP_NAME') ?? '',
      validator: frontendEnvValidator,
      configPath: join(APPS_ROOT, 'frontend/vercel.json'),
    },
  ];
}
