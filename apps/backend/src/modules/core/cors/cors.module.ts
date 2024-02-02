import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { RequestOriginGuard } from '@modules/core/cors/guards/request-origin.guard';

@Module({
  providers: [
    {
      provide: APP_GUARD,
      useClass: RequestOriginGuard,
    },
  ],
})
export class CorsModule {}
