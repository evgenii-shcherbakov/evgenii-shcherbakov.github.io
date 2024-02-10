import { DatabaseMapper } from '@features/database/mappers/database.mapper';
import { ServiceAdapter } from '@features/database/types/adapters';
import { DatabaseService } from '@features/database/services/database.service';
import { Identifier, UpdateManyResult } from 'react-admin';
import { NextRequest, NextResponse } from 'next/server';
import { exceptionHandler } from '@features/database/handlers/exception.handler';
import { DatabaseEntity } from '@features/database/entities/database.entity';

type Body<Id extends Identifier = any> = {
  ids: Id[];
  update: DatabaseEntity<Id>;
};

export const updateManyHandler = (mapper: DatabaseMapper, Service: ServiceAdapter) => {
  return async <Id extends Identifier = any>(request: NextRequest, resource: string) => {
    try {
      const body: Body<Id> = await request.json();
      const service: DatabaseService = new Service(mapper, resource);

      const response: UpdateManyResult<DatabaseEntity<Id>> = {
        data: await service.updateMany<Id, DatabaseEntity<Id>>(body.ids, body.update),
      };

      return NextResponse.json(response);
    } catch (exception) {
      return exceptionHandler(exception);
    }
  };
};
