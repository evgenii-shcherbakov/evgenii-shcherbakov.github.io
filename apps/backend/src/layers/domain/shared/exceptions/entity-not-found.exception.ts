import { HttpException, HttpStatus } from '@nestjs/common';
import { IdEntity } from '@domain/shared/entities/id.entity';

type Params = {
  id?: IdEntity;
  filter?: Record<string, any>;
};

export class EntityNotFoundException extends HttpException {
  constructor(
    entityName: string,
    public readonly debug?: Params,
  ) {
    super(`${entityName} not found`, HttpStatus.NOT_FOUND);
  }
}
