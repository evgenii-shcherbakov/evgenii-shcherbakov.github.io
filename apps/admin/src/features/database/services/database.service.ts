import { DatabaseServiceParams, FilterObject } from '@features/database/types/params';
import { DatabaseEntity } from '@features/database/entities/database.entity';
import { Identifier } from 'react-admin';

export interface DatabaseService {
  count(filter: FilterObject): Promise<number>;
  getById<Id extends Identifier = any, Entity extends DatabaseEntity<Id> = any>(
    id: Id,
  ): Promise<Entity>;
  getByIdOrReturnNull<Id extends Identifier = any, Entity extends DatabaseEntity<Id> = any>(
    id: Id,
  ): Promise<Entity | null>;
  getMany<Id extends Identifier = any, Entity extends DatabaseEntity<Id> = any>(
    params: DatabaseServiceParams<Id>,
  ): Promise<Entity[]>;
  createOne<Id extends Identifier = any, Entity extends DatabaseEntity<Id> = any>(
    dto: Entity,
  ): Promise<Entity>;
  updateById<Id extends Identifier = any, Entity extends DatabaseEntity<Id> = any>(
    id: Id,
    dto: Entity,
  ): Promise<Entity>;
  updateMany<Id extends Identifier = any, Entity extends DatabaseEntity<Id> = any>(
    ids: Id[],
    dto: Entity,
  ): Promise<Id[]>;
  deleteById<Id extends Identifier = any, Entity extends DatabaseEntity<Id> = any>(
    id: Id,
  ): Promise<Entity>;
  deleteMany<Id extends Identifier = any>(ids: Id[]): Promise<Id[]>;
}
