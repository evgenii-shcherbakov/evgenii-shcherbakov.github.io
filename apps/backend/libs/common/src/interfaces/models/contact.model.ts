import { DatabaseEntity } from '@libs/common/entities/database.entity';
import { BackendContact } from '@packages/common';

export interface ContactBase extends BackendContact {
  isPrimary: boolean;
  isVisible: boolean;
}

export interface Contact extends ContactBase, DatabaseEntity {}
