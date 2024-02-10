import { ApiProperty } from '@nestjs/swagger';
import { AuthTokenResponse } from '@shared/auth';

export class AuthResponseDto implements AuthTokenResponse {
  @ApiProperty()
  readonly token: string;
}
