import { Module } from '@nestjs/common';
import { ModuleDefinition } from '@nestjs/core/interfaces/module-definition.interface';
import { ApiAuthModule } from '@infrastructure/api/auth/api.auth.module';
import { ApiCorsModule } from '@infrastructure/api/cors/api.cors.module';
import { ApiExceptionModule } from '@infrastructure/api/exception/api.exception.module';
import { ApiCryptographyModule } from '@infrastructure/api/cryptography/api.cryptography.module';

const modules: ModuleDefinition[] = [
  ApiAuthModule,
  ApiCorsModule,
  ApiExceptionModule,
  ApiCryptographyModule,
];

@Module({
  imports: [...modules],
  exports: [...modules],
})
export class ApiModule {}
