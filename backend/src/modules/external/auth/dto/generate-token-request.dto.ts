import { GenerateAuthTokenRequestBody } from '@shared/auth/models/auth-token.model';
import { ApiProperty } from '@nestjs/swagger';

export class GenerateTokenRequestDto implements GenerateAuthTokenRequestBody {
  @ApiProperty()
  readonly name: string;
}
