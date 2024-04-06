import { Module } from '@nestjs/common';
import { DEPLOYMENT_API_REPOSITORY } from '@domain/deployment/repositories/deployment-api.repository';
import { ExternalVercelApiRepositoryImpl } from '@infrastructure/external/deployment/repositories/external.vercel-api.repository.impl';
import { ExternalVercelApiMapperImpl } from '@infrastructure/external/deployment/mappers/external.vercel-api.mapper.impl';

@Module({
  providers: [
    ExternalVercelApiMapperImpl,
    {
      provide: DEPLOYMENT_API_REPOSITORY,
      useClass: ExternalVercelApiRepositoryImpl,
    },
  ],
  exports: [DEPLOYMENT_API_REPOSITORY],
})
export class ExternalDeploymentModule {}
