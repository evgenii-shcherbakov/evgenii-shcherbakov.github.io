import { Injectable } from '@nestjs/common';
import { RpcRefreshToken, RpcRegisterUser, RpcUser } from '@proto/auth';

@Injectable()
export class AuthService {
  async login(request: RpcRegisterUser): Promise<RpcUser> {
    return {
      email: request.email,
      isActive: true,
    };
  }

  async refreshToken(request: RpcRefreshToken): Promise<RpcRefreshToken> {
    return {
      token: request.token,
    };
  }

  async register(request: RpcRegisterUser): Promise<RpcUser> {
    return {
      email: request.email,
      isActive: true,
    };
  }
}
