import { ApiProperty, IntersectionType } from '@nestjs/swagger';
import { BackendContactTypeEnum } from '@packages/common';
import { IsBoolean, IsEnum, IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';
import { EntityDto } from 'dto/models/entity.dto';
import { Contact, ContactBase } from 'interfaces';

export class ContactBaseDto implements ContactBase {
  @ApiProperty({ type: Boolean })
  @IsNotEmpty()
  @IsBoolean()
  isPrimary: boolean;

  @ApiProperty({ type: Boolean })
  @IsNotEmpty()
  @IsBoolean()
  isVisible: boolean;

  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsUrl()
  link?: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    enum: BackendContactTypeEnum,
    enumName: 'BackendContactTypeEnum',
  })
  @IsNotEmpty()
  @IsEnum(BackendContactTypeEnum)
  type: BackendContactTypeEnum;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  value: string;
}

export class ContactDto extends IntersectionType(ContactBaseDto, EntityDto) implements Contact {}
