import { Module } from '@nestjs/common';
import { ModuleDefinition } from '@nestjs/core/interfaces/module-definition.interface';
import { ApiAuthModule } from '@infrastructure/api/auth/api.auth.module';
import { ApiRequestModule } from '@infrastructure/api/request/api.request.module';
import { ApiExceptionModule } from '@infrastructure/api/exception/api.exception.module';

const modules: ModuleDefinition[] = [ApiAuthModule, ApiRequestModule, ApiExceptionModule];

@Module({
  imports: [...modules],
  exports: [...modules],
})
export class ApiModule {}
