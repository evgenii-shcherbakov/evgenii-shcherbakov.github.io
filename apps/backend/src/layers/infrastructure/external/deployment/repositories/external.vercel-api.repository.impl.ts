import { DeploymentApiRepository } from '@domain/deployment/repositories/deployment-api.repository';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { BackendEnvironment } from '@packages/environment';
import { DeploymentAppEnum } from '@domain/deployment/enums/deployment-app.enum';
import { TEN } from '@/constants/numbers';
import { SortOrderEnum } from '@domain/shared/enums/sort-order.enum';
import { ExternalVercelApiMapperImpl } from '@infrastructure/external/deployment/mappers/external.vercel-api.mapper.impl';
import { ExternalVercelRestApiSchema, RestApiClient, HttpHeadersEnum } from '@packages/common';

@Injectable()
export class ExternalVercelApiRepositoryImpl implements DeploymentApiRepository {
  private readonly logger = new Logger(ExternalVercelApiRepositoryImpl.name, { timestamp: true });
  private readonly restApiClient: RestApiClient<ExternalVercelRestApiSchema>;

  constructor(
    configService: ConfigService<BackendEnvironment>,
    private readonly mapper: ExternalVercelApiMapperImpl,
  ) {
    this.restApiClient = new RestApiClient<ExternalVercelRestApiSchema>(
      configService.get('VERCEL_API_URL'),
    );

    this.restApiClient.interceptors.request.use((config) => {
      return {
        ...config,
        headers: {
          ...(config.headers ?? {}),
          [HttpHeadersEnum.AUTHORIZATION]: `Bearer ${configService.get('VERCEL_TOKEN')}`,
        },
      };
    });
  }

  private exceptionHandler(exception: unknown) {
    if (exception instanceof Error) {
      return this.logger.error(exception, exception.stack);
    }

    this.logger.error(exception);
  }

  async getAppDeploymentDomains(app: DeploymentAppEnum | string, limit = TEN): Promise<string[]> {
    try {
      const response = await this.restApiClient.typed.get('v6/deployments', {
        query: {
          projectId: this.mapper.toProjectId(app),
          order: SortOrderEnum.ASC,
          state: 'READY',
          target: 'production',
          limit,
        },
      });

      return response.deployments.map(({ url }) => url);
    } catch (exception) {
      this.exceptionHandler(exception);
      return [];
    }
  }

  async getAppMainDomains(app: DeploymentAppEnum | string, limit = TEN): Promise<string[]> {
    try {
      const response = await this.restApiClient.typed.get('v9/projects/:projectId/domains', {
        query: { verified: true, order: SortOrderEnum.ASC, limit },
        params: {
          projectId: this.mapper.toProjectId(app),
        },
      });

      return response.domains.map(({ name }) => name);
    } catch (exception) {
      this.exceptionHandler(exception);
      return [];
    }
  }
}
