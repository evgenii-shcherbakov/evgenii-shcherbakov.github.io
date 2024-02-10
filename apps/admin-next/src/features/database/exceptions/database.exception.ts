import { HttpStatusCodeEnum } from '@features/database/enums/http-status-code.enum';

export class DatabaseException extends Error {
  constructor(
    private readonly statusCode: HttpStatusCodeEnum,
    message: string = 'Database exception',
  ) {
    super(message);
  }

  getStatusCode() {
    return this.statusCode;
  }
}
