import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsEnum, IsNumber, IsObject, IsOptional, IsString } from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { SortOrderEnum } from '@infrastructure/api/shared/enums/sort-order.enum';

export class GetManyQueryDto {
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false })
  readonly page?: number;

  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false })
  readonly items?: number;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  readonly sortBy?: string;

  @Type(() => String)
  @IsEnum(SortOrderEnum)
  @IsOptional()
  @ApiProperty({ enum: SortOrderEnum, required: false })
  readonly sortOrder?: SortOrderEnum;

  @Transform(({ value }) => (value ? JSON.parse(value) : {}))
  @IsObject()
  @IsOptional()
  @ApiProperty({ type: 'object', required: false })
  readonly filter?: object;

  @Transform(({ value }) => (value ? JSON.parse(value) : []))
  @IsArray()
  @IsOptional()
  @ApiProperty({ type: String, isArray: true, required: false })
  readonly ids?: string[];
}
