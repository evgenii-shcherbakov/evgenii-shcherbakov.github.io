import { JwtModuleOptions, JwtModuleAsyncOptions } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { BackendEnvironment } from '@shared/environment/types/env-validation';
import { JWT_EXPIRE_TIME, JWT_IGNORE_EXPIRATION } from '@backend/app/constants/configuration';

const jwtModuleOptionsFactory = (
  configService: ConfigService<BackendEnvironment>,
): JwtModuleOptions => {
  return {
    secret: configService.get('JWT_SECRET'),
    signOptions: {
      expiresIn: JWT_EXPIRE_TIME,
    },
    verifyOptions: {
      ignoreExpiration: JWT_IGNORE_EXPIRATION,
    },
  };
};

export const jwtModuleAsyncOptions: JwtModuleAsyncOptions = {
  useFactory: jwtModuleOptionsFactory,
  inject: [ConfigService],
};
