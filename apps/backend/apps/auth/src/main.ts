import { ApiExceptionFilter } from '@libs/exceptions';
import { GrpcClientEnum, GrpcStrategy } from '@libs/grpc';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { AuthModule } from './auth.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AuthModule,
    GrpcStrategy.getClientOptions(GrpcClientEnum.AUTH),
  );

  app.useGlobalFilters(new ApiExceptionFilter());
  await app.listen();
}
bootstrap();
