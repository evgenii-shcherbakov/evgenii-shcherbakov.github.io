import { DatabaseEntity } from '@features/database/entities/database.entity';
import { Identifier } from 'react-admin';

export interface FilterMapper {
  searchFilter(target: string): string;
  biggerFilter(target: string): string;
  biggerOrEqualFilter(target: string): string;
  smallerFilter(target: string): string;
  smallerOrEqualFilter(target: string): string;
}

export interface DatabaseMapper extends FilterMapper {
  mapRequestParamToId<Id extends Identifier = any>(input: string): Id;
  mapRawToEntity<Entity extends DatabaseEntity = DatabaseEntity>(raw: Record<string, any>): Entity;
}
