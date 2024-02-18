import { ApiController } from '@infrastructure/api/swagger/decorators/api-controller.decorator';
import { JwtAuth } from '@infrastructure/api/auth/decorators/jwt-auth.decorator';
import { ApiPostEndpoint } from '@infrastructure/api/swagger/decorators/api-endpoint.decorator';
import { Body, Inject } from '@nestjs/common';
import {
  CRYPTOGRAPHY_SERVICE,
  CryptographyService,
} from '@domain/cryptography/services/cryptography.service';
import { HashDataDto } from '@infrastructure/api/cryptography/dto/hash-data.dto';
import { AllowedApps } from '@infrastructure/api/request/decorators/allowed-apps.decorator';
import { DeploymentAppEnum } from '@domain/deployment/enums/deployment-app.enum';

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
  @AllowedApps(DeploymentAppEnum.ADMIN)
  async hash(@Body() { value }: HashDataDto): Promise<HashDataDto> {
    return { value: await this.cryptographyService.hash(value) };
  }
}
