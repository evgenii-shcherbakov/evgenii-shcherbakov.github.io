import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { jwtModuleAsyncOptions } from '@/configs/jwt.config';
import { AuthModule } from '@application/auth/auth.module';
import { ApiAuthController } from '@infrastructure/api/auth/controllers/api.auth.controller';
import { ApiAuthService } from '@infrastructure/api/auth/services/api.auth.service';
import { JwtStrategy } from '@infrastructure/api/auth/strategies/jwt.strategy';
import { JwtAuthGuard } from '@infrastructure/api/auth/guards/jwt-auth.guard';
import { PersistenceUserModule } from '@infrastructure/persistence/user/persistence.user.module';
import { LocalStrategy } from '@infrastructure/api/auth/strategies/local.strategy';

@Module({
  imports: [JwtModule.registerAsync(jwtModuleAsyncOptions), AuthModule, PersistenceUserModule],
  controllers: [ApiAuthController],
  providers: [ApiAuthService, JwtStrategy, LocalStrategy],
})
export class ApiAuthModule {}
