import { CommonModule } from '@app/common';
import { GrpcModule, GrpcServiceEnum } from '@app/grpc';
import { Module } from '@nestjs/common';
import { API_GATEWAY_AUTH_CLIENT } from 'apps/api-gateway/src/api-gateway.constants';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';

@Module({
  imports: [
    CommonModule,
    GrpcModule.register({
      clients: [{ name: API_GATEWAY_AUTH_CLIENT, service: GrpcServiceEnum.AUTH }],
    }),
  ],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService],
})
export class ApiGatewayModule {}
