import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from '@modules/core/auth/guards/jwt-auth.guard';
import { JwtModule } from '@nestjs/jwt';
import { jwtModuleAsyncOptions } from '@app/configs/jwt.config';
import { JwtStrategy } from '@modules/core/auth/strategies/jwt.strategy';
import { AuthTokenModule } from '@modules/persistence/auth-token/auth-token.module';

@Module({
  imports: [JwtModule.registerAsync(jwtModuleAsyncOptions), AuthTokenModule],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtStrategy,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AuthModule {}
