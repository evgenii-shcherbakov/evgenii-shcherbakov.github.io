import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ExceptionResponseDto {
  @ApiProperty()
  readonly statusCode: number;

  @ApiProperty({ example: new Date().toISOString() })
  readonly timestamp: string;

  @ApiProperty()
  readonly path: string;

  @ApiProperty()
  readonly message: string;

  @ApiPropertyOptional({ type: Object })
  readonly debug?: object;
}
