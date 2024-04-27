import { DatabaseEntity } from '@libs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsMongoId, IsNotEmpty, IsOptional } from 'class-validator';

export class EntityDto implements DatabaseEntity {
  @ApiProperty()
  @IsNotEmpty()
  @IsMongoId()
  @Type(() => String)
  _id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  createdAt: Date;

  @ApiProperty()
  @IsOptional()
  @IsDate()
  updatedAt?: Date;
}
