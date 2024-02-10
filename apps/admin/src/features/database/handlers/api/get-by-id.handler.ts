import { DatabaseMapper } from '@features/database/mappers/database.mapper';
import { ServiceAdapter } from '@features/database/types/adapters';
import { GetOneResult, Identifier } from 'react-admin';
import { NextResponse } from 'next/server';
import { DatabaseEntity } from '@features/database/entities/database.entity';
import { DatabaseService } from '@features/database/services/database.service';
import { exceptionHandler } from '@features/database/handlers/exception.handler';

export const getByIdHandler = (mapper: DatabaseMapper, Service: ServiceAdapter) => {
  return async <Id extends Identifier = any>(resource: string, entityId: string) => {
    try {
      const id: Id = mapper.mapRequestParamToId(entityId);
      const service: DatabaseService = new Service(mapper, resource);

      const response: GetOneResult<DatabaseEntity<Id>> = {
        data: await service.getById<Id, DatabaseEntity<Id>>(id),
      };

      return NextResponse.json(response);
    } catch (exception) {
      return exceptionHandler(exception);
    }
  };
};
