import { Module } from '@nestjs/common';
import { ModuleDefinition } from '@nestjs/core/interfaces/module-definition.interface';
import { ExternalDeploymentModule } from '@infrastructure/external/deployment/external.deployment.module';

const modules: ModuleDefinition[] = [ExternalDeploymentModule];

@Module({
  imports: [...modules],
  exports: [...modules],
})
export class ExternalModule {}
