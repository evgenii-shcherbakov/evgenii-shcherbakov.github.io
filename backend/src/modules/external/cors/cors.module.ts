import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { RequestOriginGuard } from '@backend/modules/external/cors/guards/request-origin.guard';

@Module({
  providers: [
    {
      provide: APP_GUARD,
      useClass: RequestOriginGuard,
    },
  ],
})
export class CorsModule {}
