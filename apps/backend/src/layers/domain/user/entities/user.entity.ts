import { IdEntity } from '@domain/shared/entities/id.entity';
import { DatabaseEntity } from '@domain/shared/entities/database.entity';

export class UserEntity extends DatabaseEntity {
  constructor(
    public readonly id: IdEntity,
    public email: string,
    public password: string,
  ) {
    super(id);
  }
}
