import { Module } from '@nestjs/common';
import { ModuleDefinition } from '@nestjs/core/interfaces/module-definition.interface';
import { PersistenceUserModule } from '@infrastructure/persistence/user/persistence.user.module';

const modules: ModuleDefinition[] = [PersistenceUserModule];

@Module({
  imports: [...modules],
  exports: [...modules],
})
export class PersistenceModule {}
