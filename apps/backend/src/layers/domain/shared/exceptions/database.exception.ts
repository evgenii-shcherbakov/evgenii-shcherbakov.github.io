import { HttpException, HttpStatus } from '@nestjs/common';

export class DatabaseException extends HttpException {
  constructor(message: string) {
    super(`DatabaseException: ${message}`, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
