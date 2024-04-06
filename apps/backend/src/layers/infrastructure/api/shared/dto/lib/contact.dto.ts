import { BackendContact, BackendContactTypeEnum } from '@packages/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

export class ContactDto implements BackendContact {
  @ApiProperty()
  @IsOptional()
  @IsUrl()
  link?: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsUrl()
  name: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  value: string;

  @ApiProperty({
    required: true,
    enum: BackendContactTypeEnum,
    examples: Object.values(BackendContactTypeEnum),
  })
  @IsEnum(BackendContactTypeEnum)
  type: BackendContactTypeEnum;
}
