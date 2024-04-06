import { RefreshTokenDto, RegisterUserDto, User } from '@app/grpc';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async login(request: RegisterUserDto): Promise<User> {
    return {
      email: request.email,
      isActive: true,
    };
  }

  async refreshToken(request: RefreshTokenDto): Promise<RefreshTokenDto> {
    return {
      token: request.token,
    };
  }

  async register(request: RegisterUserDto): Promise<User> {
    return {
      email: request.email,
      isActive: true,
    };
  }
}
