import { Module } from '@nestjs/common';
import { ModuleDefinition } from '@nestjs/core/interfaces/module-definition.interface';

const modules: ModuleDefinition[] = [];

@Module({
  imports: [...modules],
  exports: [...modules],
})
export class AdminModule {}
