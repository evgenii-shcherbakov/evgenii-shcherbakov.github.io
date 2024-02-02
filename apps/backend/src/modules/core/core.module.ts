import { Module } from '@nestjs/common';
import { AuthModule } from '@modules/core/auth/auth.module';
import { CorsModule } from '@modules/core/cors/cors.module';
import { ModuleDefinition } from '@nestjs/core/interfaces/module-definition.interface';

const modules: ModuleDefinition[] = [AuthModule, CorsModule];

@Module({
  imports: [...modules],
  exports: [...modules],
})
export class CoreModule {}
