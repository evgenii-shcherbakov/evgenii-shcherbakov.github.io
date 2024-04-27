import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

const currentDate = new Date().toISOString();

export const getHttpExceptionDto = (status: HttpStatus, message: string) => {
  class ExceptionDto {
    @ApiProperty({ default: message })
    message: string;

    @ApiProperty({ default: status })
    code: number;

    @ApiProperty({ default: currentDate })
    timestamp: string;

    @ApiProperty()
    path: string;
  }

  return ExceptionDto;
};
