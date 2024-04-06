import { Either } from '@sweet-monads/either';
import { DatabaseException } from '@domain/shared/exceptions/database.exception';
import { IdEntity } from '@domain/shared/entities/id.entity';
import { EntityNotFoundException } from '@domain/shared/exceptions/entity-not-found.exception';
import { DatabaseEntity } from '@domain/shared/entities/database.entity';
import { RepositoryGetParams } from '@infrastructure/persistence/shared/types/repository-params';
// import { Document, FilterQuery, UpdateQuery } from 'mongoose';

// export type TDeepPartial<T> = T extends object
//   ? {
//       [P in keyof T]?: TDeepPartial<T[P]>;
//     }
//   : T;
//
// export type TRangeQuery<TEntity, V extends number | Date = number | Date> = Partial<
//   Record<keyof TEntity, Partial<{ $gte: V; $lte: V }>>
// >;
//
// export type TSortEntity<T extends string> = Partial<{ [P in T]: 1 | -1 }>;
//
// export type TBaseEntityRange<T extends string = 'createdAt'> = {
//   field: T;
//   gte?: Date | number;
//   lte?: Date | number;
// };

export interface BaseRepository<
  Entity extends DatabaseEntity,
  // QueryForFind = Partial<Entity>,
  // BodyForUpdate = Partial<Entity>,
> {
  saveOne(entity: Entity): Promise<Either<DatabaseException, Entity>>;
  saveMany(entities: Entity[]): Promise<Either<DatabaseException, Entity[]>>;

  isExistsById(id: IdEntity): Promise<boolean>;
  isExists(query?: Partial<Entity>): Promise<boolean>;

  getById(id: IdEntity): Promise<Either<EntityNotFoundException, Entity>>;
  getByIds(ids: IdEntity[]): Promise<Entity[]>;

  getAll(): Promise<Entity[]>;
  getOne(query?: Partial<Entity>): Promise<Either<EntityNotFoundException, Entity>>;
  getMany(query?: Partial<Entity>, params?: RepositoryGetParams<Entity>): Promise<Entity[]>;

  count(query?: Partial<Entity>): Promise<number>;

  updateById(
    id: IdEntity,
    update: Partial<Entity>,
  ): Promise<Either<EntityNotFoundException, Entity>>;
  updateMany(query?: Partial<Entity>, update?: Partial<Entity>): Promise<boolean>;

  deleteById(id: IdEntity): Promise<boolean>;
  deleteMany(query?: Partial<Entity>): Promise<boolean>;

  // // GET MANY
  // getMany(limit: number, offset: number, query?: QueryForFind): Promise<TEntity[]>;
  // getManyByPaginate(
  //   limit: number,
  //   offset: number,
  //   query?: QueryForFind,
  // ): Promise<PaginateResult<TEntity>>;
  // getManyByPaginateModifyOr(
  //   limit: number,
  //   offset: number,
  //   query?: QueryForFind,
  //   sort?: TSortEntity<string>,
  // ): Promise<PaginateResult<TEntity>>;
  // getAllByIds(ids: IdEntity[]): Promise<TEntity[]>;
  // getAllByQuery(query?: QueryForFind, sort?: TSortEntity<string>): AsyncGenerator<TEntity>;
  //
  // // GET ONE
  // getOneByQuery(query: QueryForFind): Promise<Either<EntityNotFoundException, TEntity>>;
  // getOneById(id: IdEntity): Promise<Either<EntityNotFoundException, TEntity>>;
  // getNewOne(filter: QueryForFind): Promise<Either<EntityNotFoundException, TEntity>>;
  //
  // getOneByRange<T extends string = 'createdAt'>(
  //   query: QueryForFind,
  //   range: TBaseEntityRange<T>,
  // ): Promise<Either<EntityNotFoundException, TEntity>>;
  //
  // // COUNT
  // countByQuery(query: QueryForFind): Promise<number>;
  // countByRange<T extends string = 'createdAt'>(
  //   query: QueryForFind,
  //   range: TBaseEntityRange<T>,
  // ): Promise<MoneyEntity>;
  //
  // // UPDATE
  // updatedOneByQuery(query: QueryForFind, body: QueryForFind): Promise<boolean>;
  // updatedOneById(id: IdEntity, body: BodyForUpdate): Promise<boolean>;
  // updatedManyByQuery(query: QueryForFind, body: BodyForUpdate): Promise<boolean>;
  //
  // // Remove
  // deleteOneById(id: IdEntity): Promise<boolean>;
  // deleteManyByQuery(query: QueryForFind): Promise<boolean>;
}
