import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { BackendEnvironment } from '@packages/environment';
import { USER_REPOSITORY, UserRepository } from '@domain/user/repositories/user.repository';
import { JWT_IGNORE_EXPIRATION } from '@/constants/configuration';
import { UserEntity } from '@domain/user/entities/user.entity';
import { IdEntity } from '@domain/shared/entities/id.entity';
import { AuthJwtPayload } from '@infrastructure/api/auth/types/payload.types';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    configService: ConfigService<BackendEnvironment>,
    @Inject(USER_REPOSITORY)
    private readonly userRepository: UserRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: JWT_IGNORE_EXPIRATION,
      secretOrKey: configService.get('JWT_SECRET'),
    });
  }

  async validate(payload: AuthJwtPayload): Promise<UserEntity> {
    const ioUser = await this.userRepository.getById(new IdEntity(payload.id));

    if (ioUser.isLeft()) {
      throw ioUser.value;
    }

    return ioUser.value;
  }
}
