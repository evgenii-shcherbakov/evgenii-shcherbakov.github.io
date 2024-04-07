import { AuthServiceClient } from '@app/grpc';
import { Inject, Injectable } from '@nestjs/common';
import { API_GATEWAY_AUTH_CLIENT } from 'apps/api-gateway/src/api-gateway.constants';

@Injectable()
export class ApiGatewayService {
  constructor(
    @Inject(API_GATEWAY_AUTH_CLIENT) private readonly authServiceClient: AuthServiceClient,
  ) {}

  async register(email: string, password: string) {
    return this.authServiceClient.register({ email, password });
  }
}
