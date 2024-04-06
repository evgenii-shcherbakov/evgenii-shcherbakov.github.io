import { CommonModule } from '@app/common';
import { GrpcClientModule } from '@app/grpc';
import { GrpcServiceEnum } from '@app/grpc/enums/grpc-service.enum';
import { Module } from '@nestjs/common';
import { API_GATEWAY_CLIENT } from 'apps/api-gateway/src/api-gateway.constants';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';

@Module({
  imports: [CommonModule, GrpcClientModule.register(API_GATEWAY_CLIENT, GrpcServiceEnum.AUTH)],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService],
})
export class ApiGatewayModule {}
