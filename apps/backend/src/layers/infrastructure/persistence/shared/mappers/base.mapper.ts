import { Document, FilterQuery, Types } from 'mongoose';
import { IdEntity } from '@domain/shared/entities/id.entity';

export abstract class BaseMapper<Entity, Doc extends Document> {
  abstract toEntity(document: Doc): Entity;

  abstract toDocument(entity: Partial<Entity>): Partial<Doc>;

  toMongoQuery(query: Partial<Entity>): FilterQuery<Doc> {
    return this.convertEntityToMongoQuery(this.toDocument(query));
  }

  protected convertEntityToMongoQuery(
    query: Record<string, any> = {},
    fieldPath = '',
  ): Record<string, any> {
    return Object.keys(query).reduce((acc: Record<string, any>, key: string) => {
      if (!key) {
        return acc;
      }

      const value = query[key];

      if (!value) {
        return acc;
      }

      const isId = value instanceof IdEntity;

      if (isId) {
        acc[fieldPath + (key === 'id' ? '_id' : key)] = value.toObjectId();
        return acc;
      }

      if (value && typeof value === 'object') {
        return {
          ...acc,
          ...this.convertEntityToMongoQuery(value, `${fieldPath + key}.`),
        };
      }

      acc[fieldPath + key] = value;
      return acc;
    }, {});
  }

  // protected convert;

  // mapToSchemaQuery(query: Partial<TEntity> | Record<string, any>): Record<string, any> {
  //   return MongooseFunctools.removeUndefined(this._mapToIdEntityPrimitive(query));
  // }
  //
  // mapToSchemaModifyOr(query: Partial<TEntity>): Record<string, any> {
  //   return Object.entries(this.mapToSchemaQuery(query)).map(([key, value]) => {
  //     return { [key]: value };
  //   });
  // }
  //
  // mapToSchemaUpdate(body: Record<string, any>): Record<string, any> {
  //   return MongooseFunctools.convertObjectToUpdate(body);
  // }
  //
  // protected _toNumber<T extends MoneyEntity | undefined>(
  //   ttl: T,
  // ): T extends MoneyEntity ? number : undefined {
  //   return (ttl ? ttl.toNumber() : undefined) as T extends MoneyEntity ? number : undefined;
  // }
  //
  // protected _toMoneyEntity<T extends number | undefined>(
  //   ttl: T,
  // ): T extends number ? MoneyEntity : undefined {
  //   return (ttl ? MoneyEntity.of(ttl) : undefined) as T extends number ? MoneyEntity : undefined;
  // }
  //
  // protected _toObjetId(id?: IdEntity) {
  //   if (typeof id === 'undefined') return undefined;
  //   return new Types.ObjectId(id.str);
  // }
  //
  // protected _toString(id: IdEntity) {
  //   if (typeof id === 'undefined') return undefined;
  //   return id?.str;
  // }
  //
  // protected _toIdEntity(id: Types.ObjectId | string) {
  //   if (typeof id === 'string') {
  //     return new IdEntity(id);
  //   }
  //   return new IdEntity(id.toString());
  // }
  //
  // private _mapToIdEntityPrimitive(entity: Record<string, any>) {
  //   const newObj = {};
  //   for (const [key, item] of Object.entries(entity)) {
  //     if (item instanceof IdEntity) {
  //       if (key == 'id') {
  //         newObj['_id'] = new Types.ObjectId(item.str);
  //       } else {
  //         newObj[key] = new Types.ObjectId(item.str);
  //       }
  //     } else if (item instanceof IdAndJoinEntityEntity) {
  //       newObj[key] = item.id.str;
  //     } else if (typeof item === 'object') {
  //       newObj[key] = this._mapToIdEntityPrimitive(item);
  //     } else {
  //       newObj[key] = item;
  //     }
  //   }
  //   return newObj;
  // }
}
