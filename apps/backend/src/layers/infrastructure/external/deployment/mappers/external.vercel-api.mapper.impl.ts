import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DeploymentAppEnum } from '@domain/deployment/enums/deployment-app.enum';
import { BackendEnvironment } from '@shared/environment';

@Injectable()
export class ExternalVercelApiMapperImpl {
  constructor(private readonly configService: ConfigService<BackendEnvironment>) {}

  toProjectId(app: DeploymentAppEnum | string): string {
    switch (app) {
      case DeploymentAppEnum.ADMIN:
        return this.configService.get('VERCEL_ADMIN_PROJECT_ID');
      case DeploymentAppEnum.BACKEND:
        return this.configService.get('VERCEL_BACKEND_PROJECT_ID');
      case DeploymentAppEnum.FRONTEND:
        return this.configService.get('VERCEL_FRONTEND_PROJECT_ID');
      default:
        return '';
    }
  }
}
