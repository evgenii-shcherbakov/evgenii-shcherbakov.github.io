import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  REGISTER_USER_SERVICE,
  RegisterUserService,
} from '@domain/auth/services/register-user.service';
import { AuthResponseDto } from '@infrastructure/api/auth/dto/response/auth-response.dto';
import { UserEntity } from '@domain/user/entities/user.entity';
import { AuthRequestBodyDto } from '@infrastructure/api/auth/dto/request/auth-request-body.dto';

@Injectable()
export class ApiAuthService {
  constructor(
    private readonly jwtService: JwtService,
    @Inject(REGISTER_USER_SERVICE)
    private readonly registerUserService: RegisterUserService,
  ) {}

  generateToken(user: UserEntity): string {
    return this.jwtService.sign({ id: user.id.toString(), email: user.email });
  }

  async register(dto: AuthRequestBodyDto): Promise<AuthResponseDto> {
    const io = await this.registerUserService.register(dto.email, dto.password);

    if (io.isLeft()) {
      throw io.value;
    }

    return { token: this.generateToken(io.value) };
  }
}
