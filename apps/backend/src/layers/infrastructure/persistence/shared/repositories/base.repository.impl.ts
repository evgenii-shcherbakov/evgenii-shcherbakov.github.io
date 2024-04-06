import { Document, Model, QueryOptions } from 'mongoose';
import { Either, left, right } from '@sweet-monads/either';
import { BaseMapper } from '@infrastructure/persistence/shared/mappers/base.mapper';
import { BaseRepository } from '@domain/shared/repositories/base.repository';
import { IdEntity } from '@domain/shared/entities/id.entity';
import { EntityNotFoundException } from '@domain/shared/exceptions/entity-not-found.exception';
import { DatabaseException } from '@domain/shared/exceptions/database.exception';
import { DatabaseEntity } from '@domain/shared/entities/database.entity';
import { RepositoryGetParams } from '@infrastructure/persistence/shared/types/repository-params';

export abstract class BaseRepositoryImpl<
  Entity extends DatabaseEntity,
  Doc extends Document,
  Mapper extends BaseMapper<Entity, Doc>,
> implements BaseRepository<Entity>
{
  protected constructor(
    protected readonly model: Model<Doc>,
    protected readonly mapper: Mapper,
  ) {}

  async count(query: Partial<Entity> = {}): Promise<number> {
    return this.model.countDocuments(this.mapper.toMongoQuery(query));
  }

  async deleteById(id: IdEntity): Promise<boolean> {
    const result = await this.model.findByIdAndDelete(id.toString());
    return !!result;
  }

  async deleteMany(query: Partial<Entity> = {}): Promise<boolean> {
    const result = await this.model.deleteMany(this.mapper.toMongoQuery(query));
    return !!result.deletedCount;
  }

  async getAll(): Promise<Entity[]> {
    return this.model.find().lean();
  }

  async getById(id: IdEntity): Promise<Either<EntityNotFoundException, Entity>> {
    const entity: Doc | null = await this.model.findById(id.toString()).lean();

    if (!entity) {
      return left(new EntityNotFoundException(this.model.modelName, { id }));
    }

    return right(this.mapper.toEntity(entity));
  }

  async getByIds(ids: IdEntity[]): Promise<Entity[]> {
    //@ts-ignore
    return this.model.find({ _id: { $in: ids.map((id) => id.toObjectId()) } }).lean();
  }

  async getMany(
    query: Partial<Entity> = {},
    params: RepositoryGetParams<Entity> = {},
  ): Promise<Entity[]> {
    const page = params.page ?? 1;
    const items = params.items ?? 10;

    const options: QueryOptions = {
      limit: items,
      skip: (page - 1) * items,
    };

    if (params.sortBy && params.sortOrder) {
      options.sort = {
        [params.sortBy]: params.sortOrder ? 1 : -1,
      };
    }

    const transformedQuery = this.mapper.toMongoQuery(query);

    const filter = params.ids?.length
      ? { ...transformedQuery, _id: { $in: params.ids } }
      : transformedQuery;

    const docs: Doc[] = await this.model.find(filter, null, options).lean();
    return docs.map((doc) => this.mapper.toEntity(doc));
  }

  async getOne(query: Partial<Entity> = {}): Promise<Either<EntityNotFoundException, Entity>> {
    const entity: Doc | null = await this.model.findOne(this.mapper.toMongoQuery(query)).lean();

    if (!entity) {
      return left(new EntityNotFoundException(this.model.modelName, { filter: query }));
    }

    return right(this.mapper.toEntity(entity));
  }

  async isExistsById(id: IdEntity): Promise<boolean> {
    return this.isExists({ id } as Partial<Entity>);
  }

  async isExists(query: Partial<Entity> = {}): Promise<boolean> {
    const result = await this.model.exists(this.mapper.toMongoQuery(query));
    return !!result;
  }

  async saveMany(entities: Entity[]): Promise<Either<DatabaseException, Entity[]>> {
    try {
      await this.model.insertMany(
        entities.map((entity) => this.mapper.toDocument(entity)),
        {
          lean: true,
        },
      );
      return right(entities);
    } catch (e) {
      return left(new DatabaseException(e?.message));
    }
  }

  async saveOne(entity: Entity): Promise<Either<DatabaseException, Entity>> {
    try {
      await this.model.create(this.mapper.toDocument(entity));
      return right(entity);
    } catch (e) {
      return left(new DatabaseException(e?.message));
    }
  }

  async updateById(
    id: IdEntity,
    update: Partial<Entity>,
  ): Promise<Either<EntityNotFoundException, Entity>> {
    const entity: Doc | null = await this.model
      .findByIdAndUpdate(id.toString(), { $set: this.mapper.toMongoQuery(update) }, { new: true })
      .lean();

    if (!entity) {
      return left(new EntityNotFoundException(this.model.modelName, { id }));
    }

    return right(this.mapper.toEntity(entity));
  }

  async updateMany(query: Partial<Entity> = {}, update: Partial<Entity> = {}): Promise<boolean> {
    const result = await this.model
      .updateMany(this.mapper.toMongoQuery(query), { $set: this.mapper.toMongoQuery(update) })
      .lean();

    return !!result.modifiedCount;
  }
}
