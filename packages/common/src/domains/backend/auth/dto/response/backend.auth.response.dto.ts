import { ApiProperty } from '@nestjs/swagger';

export class BackendAuthResponseDto {
  @ApiProperty()
  readonly token: string;
}
