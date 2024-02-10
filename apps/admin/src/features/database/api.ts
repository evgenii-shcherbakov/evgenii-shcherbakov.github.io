import { MapperAdapter, ServiceAdapter } from '@features/database/types/adapters';
import { DatabaseMapper } from '@features/database/mappers/database.mapper';
import { getByIdHandler } from '@features/database/handlers/api/get-by-id.handler';
import { getManyHandler } from '@features/database/handlers/api/get-many.handler';
import { createHandler } from '@features/database/handlers/api/create.handler';
import { updateByIdHandler } from '@features/database/handlers/api/update-by-id.handler';
import { updateManyHandler } from '@features/database/handlers/api/update-many.handler';
import { deleteByIdHandler } from '@features/database/handlers/api/delete-by-id.handler';
import { deleteManyHandler } from '@features/database/handlers/api/delete-many.handler';
import { MongoDatabaseMapperImpl } from '@features/database/mappers/impl/mongo.database.mapper.impl';
import { MongoDatabaseServiceImpl } from '@features/database/services/impl/mongo.database.service.impl';

const databaseModule = (Mapper: MapperAdapter, Service: ServiceAdapter) => {
  const mapper: DatabaseMapper = new Mapper();

  return {
    mapper,
    getById: getByIdHandler(mapper, Service),
    getMany: getManyHandler(mapper, Service),
    create: createHandler(mapper, Service),
    updateById: updateByIdHandler(mapper, Service),
    updateMany: updateManyHandler(mapper, Service),
    deleteById: deleteByIdHandler(mapper, Service),
    deleteMany: deleteManyHandler(mapper, Service),
  };
};

export const database = databaseModule(MongoDatabaseMapperImpl, MongoDatabaseServiceImpl);
