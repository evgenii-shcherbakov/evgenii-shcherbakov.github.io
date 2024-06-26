import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidIdException extends HttpException {
  constructor(id: string) {
    super(`Invalid id: ${id}`, HttpStatus.BAD_REQUEST);
  }
}
