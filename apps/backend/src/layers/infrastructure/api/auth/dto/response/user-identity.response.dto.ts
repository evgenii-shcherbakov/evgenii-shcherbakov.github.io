import { ApiProperty } from '@nestjs/swagger';

export class UserIdentityResponseDto {
  @ApiProperty()
  readonly id: string;
}
