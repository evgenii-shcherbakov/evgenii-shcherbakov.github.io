import { Inject, Module, OnModuleInit } from '@nestjs/common';
import {
  DEPLOYMENT_API_SERVICE,
  DeploymentApiService,
} from '@domain/deployment/services/deployment-api.service';
import { DeploymentApiServiceImpl } from '@application/deployment/services/deployment-api.service.impl';
import { ExternalDeploymentModule } from '@infrastructure/external/deployment/external.deployment.module';

@Module({
  imports: [ExternalDeploymentModule],
  providers: [
    {
      provide: DEPLOYMENT_API_SERVICE,
      useClass: DeploymentApiServiceImpl,
    },
  ],
  exports: [DEPLOYMENT_API_SERVICE],
})
export class DeploymentModule implements OnModuleInit {
  constructor(
    @Inject(DEPLOYMENT_API_SERVICE) private readonly deploymentApiService: DeploymentApiService,
  ) {}

  async onModuleInit() {
    await this.deploymentApiService.loadAllAppsDomains();
  }
}
