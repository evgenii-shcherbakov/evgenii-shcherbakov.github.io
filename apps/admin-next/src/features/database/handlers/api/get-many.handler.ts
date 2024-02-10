import { exceptionHandler } from '@features/database/handlers/exception.handler';
import { DatabaseMapper } from '@features/database/mappers/database.mapper';
import { ServiceAdapter } from '@features/database/types/adapters';
import { GetListResult, Identifier } from 'react-admin';
import { queryHandler } from '@features/database/handlers/query.handler';
import { DatabaseServiceParams } from '@features/database/types/params';
import { DatabaseService } from '@features/database/services/database.service';
import { NextRequest, NextResponse } from 'next/server';
import { DatabaseEntity } from '@features/database/entities/database.entity';

export const getManyHandler = (mapper: DatabaseMapper, Service: ServiceAdapter) => {
  return async <Id extends Identifier = any>(request: NextRequest, resource: string) => {
    try {
      const params: DatabaseServiceParams = queryHandler<Id>(request.nextUrl.searchParams);
      const service: DatabaseService = new Service(mapper, resource);

      const response: GetListResult<DatabaseEntity<Id>> = {
        data: await service.getMany<Id, DatabaseEntity<Id>>(params),
        total: await service.count(params.filter),
      };

      return NextResponse.json(response);
    } catch (exception) {
      return exceptionHandler(exception);
    }
  };
};
