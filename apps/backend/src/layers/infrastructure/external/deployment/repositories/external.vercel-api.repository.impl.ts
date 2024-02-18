import { DeploymentApiRepository } from '@domain/deployment/repositories/deployment-api.repository';
import { Injectable, Logger } from '@nestjs/common';
import { HttpHeadersEnum, HttpClient } from '@shared/core';
import { ConfigService } from '@nestjs/config';
import { BackendEnvironment } from '@shared/environment';
import { DeploymentAppEnum } from '@domain/deployment/enums/deployment-app.enum';
import { TEN } from '@/constants/numbers';
import { SortOrderEnum } from '@domain/shared/enums/sort-order.enum';
import { VercelGetProjectDomainsResponseDto } from '@infrastructure/external/deployment/dto/vercel/vercel-get-project-domains.response.dto';
import { VercelGetDeploymentsResponseDto } from '@infrastructure/external/deployment/dto/vercel/vercel-get-deployments.response.dto';
import { ExternalVercelApiMapperImpl } from '@infrastructure/external/deployment/mappers/external.vercel-api.mapper.impl';

@Injectable()
export class ExternalVercelApiRepositoryImpl implements DeploymentApiRepository {
  private readonly logger = new Logger(ExternalVercelApiRepositoryImpl.name, { timestamp: true });
  private readonly httpClient: HttpClient;

  constructor(
    configService: ConfigService<BackendEnvironment>,
    private readonly mapper: ExternalVercelApiMapperImpl,
  ) {
    this.httpClient = new HttpClient(configService.get('VERCEL_API_URL'));

    this.httpClient.interceptors.request.use((config) => {
      return {
        ...config,
        headers: {
          ...(config.headers ?? {}),
          [HttpHeadersEnum.AUTHORIZATION]: `Bearer ${configService.get('VERCEL_TOKEN')}`,
        },
      };
    });
  }

  async getAppDeploymentDomains(app: DeploymentAppEnum | string, limit = TEN): Promise<string[]> {
    try {
      const response: VercelGetDeploymentsResponseDto = await this.httpClient.get(
        `v6/deployments`,
        {
          query: {
            projectId: this.mapper.toProjectId(app),
            order: SortOrderEnum.ASC,
            state: 'READY',
            target: 'production',
            limit,
          },
        },
      );

      return response.deployments.map(({ url }) => url);
    } catch (exception) {
      if (exception instanceof Error) {
        this.logger.error(exception, exception.stack);
        return [];
      }

      this.logger.error(exception);
      return [];
    }
  }

  async getAppMainDomains(app: DeploymentAppEnum | string, limit = TEN): Promise<string[]> {
    try {
      const response: VercelGetProjectDomainsResponseDto = await this.httpClient.get(
        `v9/projects/${this.mapper.toProjectId(app)}/domains`,
        {
          query: { verified: true, order: SortOrderEnum.ASC, limit },
        },
      );

      return response.domains.map(({ name }) => name);
    } catch (exception) {
      if (exception instanceof Error) {
        this.logger.error(exception, exception.stack);
        return [];
      }

      this.logger.error(exception);
      return [];
    }
  }
}
