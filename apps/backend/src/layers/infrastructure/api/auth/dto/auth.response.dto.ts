import { BackendAuthResponse } from '@packages/common';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthResponseDto implements BackendAuthResponse {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  token: string;
}
