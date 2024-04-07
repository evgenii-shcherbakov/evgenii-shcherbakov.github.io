import { GrpcServiceEnum, GrpcClientStrategy } from '@app/grpc';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { AuthModule } from './auth.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AuthModule,
    GrpcClientStrategy.getOptions(GrpcServiceEnum.AUTH),
  );

  await app.listen();
}
bootstrap();
