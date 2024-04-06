import {
  AuthServiceController,
  AuthServiceControllerMethods,
  RefreshTokenDto,
  RegisterUserDto,
  User,
} from '@app/grpc';
import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
@AuthServiceControllerMethods()
export class AuthController implements AuthServiceController {
  constructor(private readonly authService: AuthService) {}

  async login(request: RegisterUserDto): Promise<User> {
    return this.authService.login(request);
  }

  async refreshToken(request: RefreshTokenDto): Promise<RefreshTokenDto> {
    return this.authService.refreshToken(request);
  }

  async register(request: RegisterUserDto): Promise<User> {
    return this.authService.register(request);
  }
}
