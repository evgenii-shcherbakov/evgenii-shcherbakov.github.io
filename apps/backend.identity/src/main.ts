import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { ApiExceptionFilter } from '@packages/backend.common';
import { GrpcClientEnum, GrpcStrategy } from '@packages/backend.transport';
import { IdentityModule } from 'identity.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    IdentityModule,
    GrpcStrategy.getClientOptions(GrpcClientEnum.IDENTITY),
  );

  app.useGlobalFilters(new ApiExceptionFilter());
  await app.listen();
}
bootstrap();
