import { AUTH_SERVICE_CLIENT } from '@apps/api-gateway/modules/auth/auth.constants';
import { AuthWebController } from '@apps/api-gateway/modules/auth/web/auth.web.controller';
import { GrpcModule, GrpcServiceEnum } from '@libs/grpc';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    GrpcModule.register({
      clients: [{ name: AUTH_SERVICE_CLIENT, service: GrpcServiceEnum.AUTH }],
    }),
  ],
  controllers: [AuthWebController],
})
export class AuthWebModule {}
