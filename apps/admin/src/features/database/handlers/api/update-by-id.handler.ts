import { DatabaseMapper } from '@features/database/mappers/database.mapper';
import { ServiceAdapter } from '@features/database/types/adapters';
import { Identifier, UpdateResult } from 'react-admin';
import { NextRequest, NextResponse } from 'next/server';
import { DatabaseEntity } from '@features/database/entities/database.entity';
import { DatabaseService } from '@features/database/services/database.service';
import { exceptionHandler } from '@features/database/handlers/exception.handler';

export const updateByIdHandler = (mapper: DatabaseMapper, Service: ServiceAdapter) => {
  return async <Id extends Identifier = any>(
    request: NextRequest,
    resource: string,
    entityId: string,
  ) => {
    try {
      const id: Id = mapper.mapRequestParamToId(entityId);
      const body: DatabaseEntity<Id> = await request.json();
      const service: DatabaseService = new Service(mapper, resource);

      const response: UpdateResult<DatabaseEntity<Id>> = {
        data: await service.updateById<Id, DatabaseEntity<Id>>(id, body),
      };

      return NextResponse.json(response);
    } catch (exception) {
      return exceptionHandler(exception);
    }
  };
};
