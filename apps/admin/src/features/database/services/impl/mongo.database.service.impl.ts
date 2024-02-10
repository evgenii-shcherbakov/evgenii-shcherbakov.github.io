import { DatabaseService } from '@features/database/services/database.service';
import { Collection, FindOptions, MongoClient, ObjectId } from 'mongodb';
import { DATABASE_URL } from '@constants/environment';
import { DatabaseMapper } from '@features/database/mappers/database.mapper';
import { DatabaseServiceParams, FilterObject } from '@features/database/types/params';
import { DatabaseEntity } from '@features/database/entities/database.entity';
import { Identifier } from 'react-admin';

export class MongoDatabaseServiceImpl implements DatabaseService {
  private static client: MongoClient | undefined;

  private static async connect(): Promise<MongoClient> {
    if (this.client) {
      return this.client;
    }

    this.client = await new MongoClient(DATABASE_URL).connect();
    return this.client;
  }

  private static async getCollection(name: string): Promise<Collection> {
    return (await this.connect()).db().collection(name);
  }

  constructor(
    private readonly mapper: DatabaseMapper,
    private readonly resource: string,
  ) {
    process.on('exit', () => MongoDatabaseServiceImpl.client?.close(true));
  }

  private mapId(id: any): ObjectId {
    return new ObjectId(id ? String(id) : undefined);
  }

  private clearDto(dto: Record<string, any>) {
    return Object.keys(dto).reduce((acc: Record<string, any>, key: string) => {
      if (key === '_id' || key === 'id') {
        return acc;
      }

      acc[key] = dto[key];
      return acc;
    }, {});
  }

  private parseParams(params: DatabaseServiceParams): FindOptions {
    const options: FindOptions = {
      limit: params.items,
      skip: (params.page - 1) * params.items,
    };

    if (params.sortBy && params.sortOrder) {
      options.sort = {
        [params.sortBy]: params.sortOrder ? 1 : -1,
      };
    }

    return options;
  }

  private parseFilter(filter: FilterObject): Record<string, any> {
    return Object.keys(filter).reduce((acc: Record<string, any>, key) => {
      const value = filter[key];

      if (value === undefined || value === null) {
        return acc;
      }

      // if (value && typeof value === 'string') {
      //   const orConditions = [];
      //
      //   try {
      //     const date = new Date(value);
      //
      //     if (date.getTime()) {
      //       orConditions.push({ [key]: date });
      //     }
      //   } catch (e) {
      //     //
      //   }
      //
      //   console.log({ $regex: new RegExp(value) });
      //
      //   orConditions.push({ [key]: { $regex: value, $options: 'i' } });
      //   orConditions.push({ [key]: value });
      //   acc['$or'] = orConditions;
      //   return acc;
      // }

      acc[key] = value;
      return acc;
    }, {});
  }

  async getById<Id extends Identifier = any, Entity extends DatabaseEntity<Id> = any>(
    id: Id,
  ): Promise<Entity> {
    const collection = await MongoDatabaseServiceImpl.getCollection(this.resource);
    const entity = await collection.findOne({ _id: this.mapId(id) });

    if (!entity) {
      throw new Error('Entity not found');
    }

    return this.mapper.mapRawToEntity<Entity>(entity);
  }

  async getByIdOrReturnNull<Id extends Identifier = any, Entity extends DatabaseEntity<Id> = any>(
    id: Id,
  ): Promise<Entity | null> {
    try {
      return this.getById<Id, Entity>(id);
    } catch (exception) {
      return null;
    }
  }

  async getMany<Id extends Identifier = any, Entity extends DatabaseEntity<Id> = any>(
    params: DatabaseServiceParams<Id>,
  ): Promise<Entity[]> {
    const filter = this.parseFilter(params.filter);

    const filterQuery = params.ids.length
      ? { ...filter, _id: { $in: params.ids.map((id) => this.mapId(id)) } }
      : filter;

    const collection = await MongoDatabaseServiceImpl.getCollection(this.resource);
    const entities: any[] = await collection.find(filterQuery, this.parseParams(params)).toArray();
    return entities.map((entity) => this.mapper.mapRawToEntity<Entity>(entity));
  }

  async count(filter: object): Promise<number> {
    const collection = await MongoDatabaseServiceImpl.getCollection(this.resource);
    return collection.countDocuments(this.parseFilter(filter));
  }

  async createOne<Id extends Identifier = any, Entity extends DatabaseEntity<Id> = any>(
    dto: Entity,
  ): Promise<Entity> {
    const collection = await MongoDatabaseServiceImpl.getCollection(this.resource);
    const result = await collection.insertOne(dto);
    const entity = await this.getById(result.insertedId.toString());
    return this.mapper.mapRawToEntity<Entity>(entity);
  }

  async updateById<Id extends Identifier = any, Entity extends DatabaseEntity<Id> = any>(
    id: Id,
    dto: Entity,
  ): Promise<Entity> {
    const collection = await MongoDatabaseServiceImpl.getCollection(this.resource);

    const entity = await collection.findOneAndUpdate(
      { _id: this.mapId(id) },
      { $set: this.clearDto(dto) },
      { returnDocument: 'after' },
    );

    if (!entity) {
      throw new Error('Entity not found');
    }

    return this.mapper.mapRawToEntity<Entity>(entity);
  }

  async deleteById<Id extends Identifier = any, Entity extends DatabaseEntity<Id> = any>(
    id: Id,
  ): Promise<Entity> {
    const collection = await MongoDatabaseServiceImpl.getCollection(this.resource);
    const entity = await collection.findOneAndDelete({ _id: this.mapId(id) });

    if (!entity) {
      throw new Error('Entity not found');
    }

    return this.mapper.mapRawToEntity<Entity>(entity);
  }

  async updateMany<Id extends Identifier = any, Entity extends DatabaseEntity<Id> = any>(
    ids: Id[],
    dto: Entity,
  ): Promise<Id[]> {
    const collection = await MongoDatabaseServiceImpl.getCollection(this.resource);

    const result = await collection.updateMany(
      { _id: { $in: ids.map((id) => this.mapId(id)) } },
      dto,
      { upsert: true },
    );

    if (result.modifiedCount + result.upsertedCount !== ids.length) {
      throw new Error('Error during update many entities');
    }

    return ids;
  }

  async deleteMany<Id extends Identifier = any>(ids: Id[]): Promise<Id[]> {
    const collection = await MongoDatabaseServiceImpl.getCollection(this.resource);
    const result = await collection.deleteMany({ _id: { $in: ids.map((id) => this.mapId(id)) } });

    if (result.deletedCount !== ids.length) {
      throw new Error('Error during delete many entities');
    }

    return ids;
  }
}
