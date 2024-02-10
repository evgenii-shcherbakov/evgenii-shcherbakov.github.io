import { ApiController } from '@infrastructure/api/swagger/decorators/api-controller.decorator';
import { JwtAuth } from '@infrastructure/api/auth/decorators/jwt-auth.decorator';
import { ApiPostEndpoint } from '@infrastructure/api/swagger/decorators/api-endpoint.decorator';
import { AllowedOrigins } from '@infrastructure/api/cors/decorators/allowed-origins.decorator';
import { RequestOriginEnum } from '@infrastructure/api/cors/enums/request-origin.enum';
import { Body, Inject } from '@nestjs/common';
import {
  CRYPTOGRAPHY_SERVICE,
  CryptographyService,
} from '@domain/cryptography/services/cryptography.service';
import { HashDataDto } from '@infrastructure/api/cryptography/dto/hash-data.dto';

@JwtAuth()
@ApiController('cryptography')
export class ApiCryptographyController {
  constructor(
    @Inject(CRYPTOGRAPHY_SERVICE) private readonly cryptographyService: CryptographyService,
  ) {}

  @ApiPostEndpoint({
    path: 'hash',
    response: {
      type: HashDataDto,
    },
  })
  @AllowedOrigins(RequestOriginEnum.ADMIN)
  async hash(@Body() { value }: HashDataDto): Promise<HashDataDto> {
    return { value: await this.cryptographyService.hash(value) };
  }
}
