import { Module } from '@nestjs/common';
import { DeploymentModule } from '@application/deployment/deployment.module';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { ApiRequestInterceptor } from '@infrastructure/api/request/interceptors/api.request.interceptor';
import { RequestOriginGuard } from '@infrastructure/api/request/guards/request-origin.guard';

@Module({
  imports: [DeploymentModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RequestOriginGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ApiRequestInterceptor,
    },
  ],
})
export class ApiRequestModule {}
