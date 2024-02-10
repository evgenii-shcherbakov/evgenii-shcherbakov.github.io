import { DatabaseMapper } from '@features/database/mappers/database.mapper';
import { DatabaseEntity } from '@features/database/entities/database.entity';
import { Identifier } from 'react-admin';

export class MongoDatabaseMapperImpl implements DatabaseMapper {
  biggerFilter(target: string): string {
    return `${target}.$gt`;
  }

  biggerOrEqualFilter(target: string): string {
    return `${target}.$gte`;
  }

  mapRawToEntity<Entity extends DatabaseEntity = DatabaseEntity>(raw: Record<string, any>): Entity {
    return {
      ...raw,
      id: String(raw['_id']),
    } as any;
  }

  searchFilter(target: string): string {
    return `${target}.$regex`;
  }

  smallerFilter(target: string): string {
    return `${target}.$lt`;
  }

  smallerOrEqualFilter(target: string): string {
    return `${target}.$lte`;
  }

  mapRequestParamToId<Id extends Identifier = any>(input: string): Id {
    return input as Id;
  }
}
