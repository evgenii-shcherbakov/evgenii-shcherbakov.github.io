import { BackendAuthUserIdentityResponse } from '@packages/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty } from 'class-validator';

export class AuthUserIdentityResponseDto implements BackendAuthUserIdentityResponse {
  @ApiProperty()
  @IsNotEmpty()
  @IsMongoId()
  id: string;
}
