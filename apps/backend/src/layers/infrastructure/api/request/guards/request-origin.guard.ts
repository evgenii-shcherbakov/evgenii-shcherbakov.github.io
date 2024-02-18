import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Inject,
  Injectable,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { BackendEnvironment } from '@shared/environment';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { MetadataKeyEnum } from '@/enums/metadata-key.enum';
import {
  DEPLOYMENT_API_SERVICE,
  DeploymentApiService,
} from '@domain/deployment/services/deployment-api.service';
import { DeploymentAppEnum } from '@domain/deployment/enums/deployment-app.enum';

@Injectable()
export class RequestOriginGuard implements CanActivate {
  private readonly logger = new Logger(RequestOriginGuard.name, { timestamp: true });

  constructor(
    private readonly reflector: Reflector,
    private readonly configService: ConfigService<BackendEnvironment>,
    @Inject(DEPLOYMENT_API_SERVICE)
    private readonly deploymentApiService: DeploymentApiService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    if (this.configService.get('NODE_ENV') !== 'production') {
      this.logger.debug(`development mode, skip request origin check`);
      return true;
    }

    const request: Request = context.switchToHttp().getRequest();
    const requestOrigin: string = request.headers.origin ?? '';

    this.logger.debug(`request origin: ${requestOrigin}`);

    const allowedApps: DeploymentAppEnum[] = this.reflector.getAllAndOverride(
      MetadataKeyEnum.ALLOWED_APPS,
      [context.getHandler(), context.getClass()],
    );

    if (!allowedApps?.length) {
      this.logger.debug(`skip request origin check for endpoint`);
      return true;
    }

    for (const app of allowedApps) {
      if (await this.deploymentApiService.isExistsAppOrigin(app, requestOrigin)) {
        this.logger.debug(`request origin check passed`);
        return true;
      }
    }

    throw new ForbiddenException(`Request from origin '${requestOrigin}' is not allowed by CORS`);
  }
}
