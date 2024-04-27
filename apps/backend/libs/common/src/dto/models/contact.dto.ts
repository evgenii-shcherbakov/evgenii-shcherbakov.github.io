import { Contact, ContactBase } from '@libs/common/interfaces';
import { ApiProperty, IntersectionType } from '@nestjs/swagger';
import { BackendContactTypeEnum } from '@packages/common';
import { IsBoolean, IsEnum, IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';
import { EntityDto } from './entity.dto';

export class ContactBaseDto implements ContactBase {
  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  isPrimary: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  isVisible: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsUrl()
  link?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ enum: BackendContactTypeEnum, enumName: 'BackendContactTypeEnum' })
  @IsNotEmpty()
  @IsEnum(BackendContactTypeEnum)
  type: BackendContactTypeEnum;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  value: string;
}

export class ContactDto extends IntersectionType(ContactBaseDto, EntityDto) implements Contact {}
