import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  REGISTER_USER_SERVICE,
  RegisterUserService,
} from '@domain/auth/services/register-user.service';
import { UserEntity } from '@domain/user/entities/user.entity';
import { BackendAuthRequest, BackendAuthResponse } from '@packages/common';
import { AuthJwtPayload } from '@infrastructure/api/auth/types/payload.types';

@Injectable()
export class ApiAuthService {
  constructor(
    private readonly jwtService: JwtService,
    @Inject(REGISTER_USER_SERVICE)
    private readonly registerUserService: RegisterUserService,
  ) {}

  generateToken(user: UserEntity): string {
    const payload: AuthJwtPayload = { id: user.id.toString(), email: user.email };
    return this.jwtService.sign(payload);
  }

  async register(data: BackendAuthRequest): Promise<BackendAuthResponse> {
    const io = await this.registerUserService.register(data.email, data.password);

    if (io.isLeft()) {
      throw io.value;
    }

    return { token: this.generateToken(io.value) };
  }
}
