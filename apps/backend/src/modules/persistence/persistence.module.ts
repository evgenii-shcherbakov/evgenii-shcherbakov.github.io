import { Module } from '@nestjs/common';
import { ModuleDefinition } from '@nestjs/core/interfaces/module-definition.interface';
import { AuthTokenModule } from '@modules/persistence/auth-token/auth-token.module';

const modules: ModuleDefinition[] = [AuthTokenModule];

@Module({
  imports: [...modules],
  exports: [...modules],
})
export class PersistenceModule {}
