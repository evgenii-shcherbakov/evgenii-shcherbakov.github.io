import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { Inject, Injectable } from '@nestjs/common';
import { UserEntity } from '@domain/user/entities/user.entity';
import { LOGIN_SERVICE, LoginService } from '@domain/auth/services/login.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject(LOGIN_SERVICE) private readonly loginService: LoginService) {
    super({ usernameField: 'email' });
  }

  async validate(username: string, password: string): Promise<UserEntity> {
    const ioUser = await this.loginService.login(username, password);

    if (ioUser.isLeft()) {
      throw ioUser.value;
    }

    return ioUser.value;
  }
}
