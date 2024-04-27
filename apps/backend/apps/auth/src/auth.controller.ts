import { Controller } from '@nestjs/common';
import {
  AuthServiceController,
  AuthServiceControllerMethods,
  RpcRefreshToken,
  RpcRegisterUser,
  RpcUser,
} from '@proto/auth';
import { AuthService } from './auth.service';

@Controller()
@AuthServiceControllerMethods()
export class AuthController implements AuthServiceController {
  constructor(private readonly authService: AuthService) {}

  async login(request: RpcRegisterUser): Promise<RpcUser> {
    return this.authService.login(request);
  }

  async refreshToken(request: RpcRefreshToken): Promise<RpcRefreshToken> {
    return this.authService.refreshToken(request);
  }

  async register(request: RpcRegisterUser): Promise<RpcUser> {
    return this.authService.register(request);
  }
}
