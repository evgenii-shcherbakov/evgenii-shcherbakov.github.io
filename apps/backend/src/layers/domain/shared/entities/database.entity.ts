import { IdEntity } from '@domain/shared/entities/id.entity';

export class DatabaseEntity {
  constructor(public readonly id: IdEntity) {}
}
