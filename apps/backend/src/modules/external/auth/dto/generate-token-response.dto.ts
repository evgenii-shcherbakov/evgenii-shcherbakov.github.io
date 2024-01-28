import { ApiProperty } from '@nestjs/swagger';
import { AuthTokenResponse } from '@shared/auth';

export class GenerateTokenResponseDto implements AuthTokenResponse {
  @ApiProperty()
  readonly token: string;
}
