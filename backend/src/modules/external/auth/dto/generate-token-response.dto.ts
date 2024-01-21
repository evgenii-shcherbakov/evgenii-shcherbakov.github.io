import { ApiProperty } from '@nestjs/swagger';
import { AuthTokenResponse } from '@shared/auth/models/auth-token.model';

export class GenerateTokenResponseDto implements AuthTokenResponse {
  @ApiProperty()
  readonly token: string;
}
