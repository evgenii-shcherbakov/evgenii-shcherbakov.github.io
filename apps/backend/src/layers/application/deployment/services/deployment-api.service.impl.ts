import { DeploymentApiService } from '@domain/deployment/services/deployment-api.service';
import { Inject, Injectable, Logger } from '@nestjs/common';
import {
  DEPLOYMENT_API_REPOSITORY,
  DeploymentApiRepository,
} from '@domain/deployment/repositories/deployment-api.repository';
import { ONE_HUNDRED, ZERO } from '@/constants/numbers';
import { DeploymentAppEnum } from '@domain/deployment/enums/deployment-app.enum';
import { CACHE_SERVICE, CacheService } from '@domain/cache/services/cache.service';
import { CacheKeyEnum } from '@domain/cache/enums/cache-key.enum';

@Injectable()
export class DeploymentApiServiceImpl implements DeploymentApiService {
  private readonly logger = new Logger(DeploymentApiServiceImpl.name, { timestamp: true });

  constructor(
    @Inject(DEPLOYMENT_API_REPOSITORY)
    private readonly deploymentApiRepository: DeploymentApiRepository,
    @Inject(CACHE_SERVICE)
    private readonly cacheService: CacheService,
  ) {}

  async isExistsAppDomain(app: DeploymentAppEnum, domain: string): Promise<boolean> {
    const cachedDomains: Partial<Record<DeploymentAppEnum, string[]>> =
      (await this.cacheService.get(CacheKeyEnum.DOMAINS)) ?? {};

    if ((cachedDomains[app] ?? []).includes(domain)) {
      return true;
    }

    const mainDomains = await this.deploymentApiRepository.getAppMainDomains(app);

    cachedDomains[app] = Array.from(new Set([...(cachedDomains[app] ?? []), ...mainDomains]));

    if (mainDomains.includes(domain)) {
      await this.cacheService.set(CacheKeyEnum.DOMAINS, cachedDomains, ZERO);
      return true;
    }

    const deploymentsDomains = await this.deploymentApiRepository.getAppDeploymentDomains(app);

    cachedDomains[app] = Array.from(
      new Set([...(cachedDomains[app] ?? []), ...deploymentsDomains]),
    );

    await this.cacheService.set(CacheKeyEnum.DOMAINS, cachedDomains, ZERO);
    return deploymentsDomains.includes(domain);
  }

  async loadAllAppsDomains(): Promise<Record<DeploymentAppEnum, string[]>> {
    const accumulator: Record<string, string[]> = {};

    this.logger.log(`Preload deployment origins...`);

    for (const key in DeploymentAppEnum) {
      const app = DeploymentAppEnum[key];

      this.logger.log(`Load ${app} deployment domains...`);

      const mainDomains = await this.deploymentApiRepository.getAppMainDomains(app);

      const deploymentsDomains = await this.deploymentApiRepository.getAppDeploymentDomains(
        app,
        ONE_HUNDRED,
      );

      accumulator[app] = Array.from(new Set([...mainDomains, ...deploymentsDomains]));
    }

    await this.cacheService.set(CacheKeyEnum.DOMAINS, accumulator, ZERO);
    this.logger.log(`Deployment domains loaded and cached`);
    return accumulator;
  }
}
