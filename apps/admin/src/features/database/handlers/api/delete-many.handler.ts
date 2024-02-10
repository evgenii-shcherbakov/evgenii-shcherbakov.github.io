import { DatabaseEntity } from '@features/database/entities/database.entity';
import { DatabaseMapper } from '@features/database/mappers/database.mapper';
import { ServiceAdapter } from '@features/database/types/adapters';
import { NextRequest, NextResponse } from 'next/server';
import { DatabaseService } from '@features/database/services/database.service';
import { DeleteManyResult, Identifier } from 'react-admin';
import { exceptionHandler } from '@features/database/handlers/exception.handler';

type Body<Id extends Identifier = any> = {
  ids: Id[];
};

export const deleteManyHandler = (mapper: DatabaseMapper, Service: ServiceAdapter) => {
  return async <Id extends Identifier = any>(request: NextRequest, resource: string) => {
    try {
      const body: Body<Id> = await request.json();
      const service: DatabaseService = new Service(mapper, resource);

      const response: DeleteManyResult<DatabaseEntity<Id>> = {
        data: await service.deleteMany<Id>(body.ids),
      };

      return NextResponse.json(response);
    } catch (exception) {
      return exceptionHandler(exception);
    }
  };
};
