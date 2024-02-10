import { DatabaseMapper } from '@features/database/mappers/database.mapper';
import { ServiceAdapter } from '@features/database/types/adapters';
import { DatabaseService } from '@features/database/services/database.service';
import { CreateResult, Identifier } from 'react-admin';
import { NextRequest, NextResponse } from 'next/server';
import { exceptionHandler } from '@features/database/handlers/exception.handler';
import { DatabaseEntity } from '@features/database/entities/database.entity';

export const createHandler = (mapper: DatabaseMapper, Service: ServiceAdapter) => {
  return async <Id extends Identifier = any>(request: NextRequest, resource: string) => {
    try {
      const body: DatabaseEntity<Id> = await request.json();
      const service: DatabaseService = new Service(mapper, resource);

      const response: CreateResult<DatabaseEntity<Id>> = {
        data: await service.createOne<Id, DatabaseEntity<Id>>(body),
      };

      return NextResponse.json(response);
    } catch (exception) {
      return exceptionHandler(exception);
    }
  };
};
