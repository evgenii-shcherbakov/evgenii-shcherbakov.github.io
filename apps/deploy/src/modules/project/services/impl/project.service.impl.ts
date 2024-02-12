import { ProjectService } from '@modules/project/services/project.service';
import { inject, injectable } from 'inversify';
import { CONFIG_SERVICE, ConfigService } from '@modules/config/services/config.service';
import { DeployProjectEntity } from '@modules/project/entities/deploy-project.entity';
import { join, resolve } from 'node:path';
import { APPS_ROOT } from '@constants/paths';
import {
  adminEnvValidator,
  backendEnvValidator,
  DeployEnvironment,
  frontendEnvValidator,
} from '@shared/environment';

@injectable()
export class ProjectServiceImpl implements ProjectService {
  constructor(
    @inject(CONFIG_SERVICE) private readonly configService: ConfigService<DeployEnvironment>,
  ) {}

  getProjects(): DeployProjectEntity[] {
    return [
      {
        id: this.configService.get('VERCEL_BACKEND_PROJECT_ID') ?? '',
        name: 'backend',
        path: resolve(APPS_ROOT, 'backend'),
        watch: [join('apps', 'backend'), 'packages'],
        appName: this.configService.get('VERCEL_BACKEND_APP_NAME') ?? '',
        validator: backendEnvValidator,
        prepareCommand: `
          echo Build...
          npm run build:backend
        `,
      },
      {
        id: this.configService.get('VERCEL_ADMIN_PROJECT_ID') ?? '',
        name: 'admin',
        path: resolve(APPS_ROOT, 'admin'),
        watch: [join('apps', 'admin'), 'packages'],
        appName: this.configService.get('VERCEL_ADMIN_APP_NAME') ?? '',
        validator: adminEnvValidator,
      },
      {
        id: this.configService.get('VERCEL_FRONTEND_PROJECT_ID') ?? '',
        name: 'frontend',
        path: resolve(APPS_ROOT, 'frontend'),
        watch: [join('apps', 'frontend'), 'packages'],
        appName: this.configService.get('VERCEL_FRONTEND_APP_NAME') ?? '',
        validator: frontendEnvValidator,
        prepareCommand: `
          echo Generate frontend serverless function entrypoint...
          npx turbo gen api --args angular ../apps/frontend/dist/frontend/server/server.mjs
        `,
      },
    ];
  }
}
