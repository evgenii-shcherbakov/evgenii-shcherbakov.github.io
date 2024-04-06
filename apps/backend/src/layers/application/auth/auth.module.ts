import { Module } from '@nestjs/common';
import { REGISTER_USER_SERVICE } from '@domain/auth/services/register-user.service';
import { RegisterUserServiceImpl } from '@application/auth/services/register-user.service.impl';
import { CryptographyModule } from '@application/cryptography/cryptography.module';
import { PersistenceUserModule } from '@infrastructure/persistence/user/persistence.user.module';
import { LOGIN_SERVICE } from '@domain/auth/services/login.service';
import { LoginServiceImpl } from '@application/auth/services/login.service.impl';

@Module({
  imports: [CryptographyModule, PersistenceUserModule],
  providers: [
    {
      provide: REGISTER_USER_SERVICE,
      useClass: RegisterUserServiceImpl,
    },
    {
      provide: LOGIN_SERVICE,
      useClass: LoginServiceImpl,
    },
  ],
  exports: [REGISTER_USER_SERVICE, LOGIN_SERVICE],
})
export class AuthModule {}
