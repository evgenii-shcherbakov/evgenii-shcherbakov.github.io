import { DatabaseEntity } from '@libs/common/entities/database.entity';
import { BaseQuery } from '@libs/common/modules/database';
import { MongoEntity } from '@libs/common/schemas/abstract/mongo.entity';
import { FilterQuery, Types } from 'mongoose';

export class MongoMapper<
  Entity extends DatabaseEntity,
  Doc extends MongoEntity,
  Query extends BaseQuery = BaseQuery & Partial<Entity>,
> {
  transformQuery({ _id, _ids, ...rest }: Query): FilterQuery<Doc> {
    const result: FilterQuery<any> = { ...rest };

    if (_id) {
      result._id = new Types.ObjectId(_id);
    }

    if (_ids?.length) {
      result._id = {
        $in: _ids.map((id) => new Types.ObjectId(id)),
      };
    }

    return result;
  }

  stringify(entity: Doc): Entity {
    return entity.toJSON({ flattenMaps: false });
  }

  stringifyMany(entities: Doc[]): Entity[] {
    return entities.map((entity) => this.stringify(entity));
  }
}
