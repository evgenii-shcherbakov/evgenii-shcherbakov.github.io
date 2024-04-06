import { AUTH_SERVICE_NAME, AuthServiceClient } from '@app/grpc';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { API_GATEWAY_CLIENT } from 'apps/api-gateway/src/api-gateway.constants';

@Injectable()
export class ApiGatewayService implements OnModuleInit {
  private authServiceClient: AuthServiceClient;

  constructor(@Inject(API_GATEWAY_CLIENT) private readonly client: ClientGrpc) {}

  onModuleInit() {
    this.authServiceClient = this.client.getService(AUTH_SERVICE_NAME);
  }

  async register(email: string, password: string) {
    return this.authServiceClient.register({ email, password });
  }
}
