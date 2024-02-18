import { DeploymentApiService } from '@domain/deployment/services/deployment-api.service';
import { Inject, Injectable, Logger } from '@nestjs/common';
import {
  DEPLOYMENT_API_REPOSITORY,
  DeploymentApiRepository,
} from '@domain/deployment/repositories/deployment-api.repository';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { ONE_HUNDRED, ZERO } from '@/constants/numbers';
import { DeploymentAppEnum } from '@domain/deployment/enums/deployment-app.enum';

@Injectable()
export class DeploymentApiServiceImpl implements DeploymentApiService {
  private readonly logger = new Logger(DeploymentApiServiceImpl.name, { timestamp: true });

  constructor(
    @Inject(DEPLOYMENT_API_REPOSITORY)
    private readonly deploymentApiRepository: DeploymentApiRepository,
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
  ) {}

  async isExistsAppOrigin(app: DeploymentAppEnum, origin: string): Promise<boolean> {
    const cachedOrigins: Partial<Record<DeploymentAppEnum, string[]>> =
      (await this.cacheManager.get('ORIGINS')) ?? {};

    if ((cachedOrigins[app] ?? []).includes(origin)) {
      return true;
    }

    const mainDomains = await this.deploymentApiRepository.getAppMainDomains(app);

    cachedOrigins[app] = Array.from(new Set([...(cachedOrigins[app] ?? []), ...mainDomains]));

    if (mainDomains.includes(origin)) {
      await this.cacheManager.set('ORIGINS', cachedOrigins, ZERO);
      return true;
    }

    const deploymentsOrigins = await this.deploymentApiRepository.getAppDeploymentDomains(app);

    cachedOrigins[app] = Array.from(
      new Set([...(cachedOrigins[app] ?? []), ...deploymentsOrigins]),
    );

    await this.cacheManager.set('ORIGINS', cachedOrigins, ZERO);
    return deploymentsOrigins.includes(origin);
  }

  async loadAllAppsOrigins(): Promise<Record<DeploymentAppEnum, string[]>> {
    const accumulator: Record<string, string[]> = {};

    this.logger.log(`Preload deployment origins...`);

    for (const key in DeploymentAppEnum) {
      const app = DeploymentAppEnum[key];

      this.logger.log(`Load ${app} deployment origins...`);

      const mainDomains = await this.deploymentApiRepository.getAppMainDomains(app);

      const deploymentsOrigins = await this.deploymentApiRepository.getAppDeploymentDomains(
        app,
        ONE_HUNDRED,
      );

      accumulator[app] = Array.from(new Set([...mainDomains, ...deploymentsOrigins]));
    }

    await this.cacheManager.set('ORIGINS', accumulator, ZERO);
    this.logger.log(`Deployment origins loaded and cached`);
    return accumulator;
  }
}
