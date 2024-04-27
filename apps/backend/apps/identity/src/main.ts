import { IdentityModule } from '@apps/identity/identity.module';
import { ApiExceptionFilter } from '@libs/exceptions';
import { GrpcClientEnum, GrpcStrategy } from '@libs/grpc';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    IdentityModule,
    GrpcStrategy.getClientOptions(GrpcClientEnum.IDENTITY),
  );

  app.useGlobalFilters(new ApiExceptionFilter());
  await app.listen();
}
bootstrap();
