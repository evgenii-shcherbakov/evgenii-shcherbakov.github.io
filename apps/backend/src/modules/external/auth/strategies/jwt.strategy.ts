import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { BackendEnvironment } from '@shared/environment';
import { JWT_IGNORE_EXPIRATION } from '@backend/app/constants/configuration';
import { JwtPayloadDto } from '@backend/modules/external/auth/dto/jwt-payload.dto';
import {
  AuthTokenRepository,
  AuthTokenRepositorySymbol,
} from '@backend/domains/auth/repositories/auth-token.repository';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    configService: ConfigService<BackendEnvironment>,
    private readonly jwtService: JwtService,
    @Inject(AuthTokenRepositorySymbol)
    private readonly authTokenRepository: AuthTokenRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: JWT_IGNORE_EXPIRATION,
      secretOrKey: configService.get('JWT_SECRET'),
    });
  }

  async validate(payload: JwtPayloadDto): Promise<JwtPayloadDto> {
    const parsedHex = parseInt(payload.hex, 16);
    const parsedOct = parseInt(payload.oct, 8);

    const exception = new UnauthorizedException('Invalid JWT token data or JWT token is missing');

    if (parsedHex !== parsedOct) {
      throw exception;
    }

    const isExists = await this.authTokenRepository.isExists(payload.name);

    if (!isExists) {
      throw exception;
    }

    return payload;
  }
}
