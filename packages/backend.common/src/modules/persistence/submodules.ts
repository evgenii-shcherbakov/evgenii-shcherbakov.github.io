import { Type } from '@nestjs/common';
import { ContactPersistenceModule } from 'modules/persistence/contact';
import { MigrationPersistenceModule } from 'modules/persistence/migration';

export const submodules: Type[] = [ContactPersistenceModule, MigrationPersistenceModule];
