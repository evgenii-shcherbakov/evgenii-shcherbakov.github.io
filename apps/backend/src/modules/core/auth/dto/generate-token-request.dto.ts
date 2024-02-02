import { GenerateAuthTokenRequestBody } from '@shared/auth';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class GenerateTokenRequestDto implements GenerateAuthTokenRequestBody {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;
}
