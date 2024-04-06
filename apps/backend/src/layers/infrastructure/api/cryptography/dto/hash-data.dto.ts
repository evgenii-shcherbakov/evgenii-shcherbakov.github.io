import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class HashDataDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly value: string;
}
