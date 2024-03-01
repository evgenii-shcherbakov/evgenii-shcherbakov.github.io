import { ApiProperty } from '@nestjs/swagger';

export class BackendAuthUserIdentityResponseDto {
  @ApiProperty()
  readonly id: string;
}
