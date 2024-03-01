import { Body, HttpStatus } from '@nestjs/common';
import { ApiAuthService } from '@infrastructure/api/auth/services/api.auth.service';
import { UserEntity } from '@domain/user/entities/user.entity';
import { User } from '@infrastructure/api/auth/decorators/user.decorator';
import { LocalAuth } from '@infrastructure/api/auth/decorators/local-auth.decorator';
import { ApiController } from '@infrastructure/api/swagger/decorators/api-controller.decorator';
import {
  ApiGetEndpoint,
  ApiPostEndpoint,
} from '@infrastructure/api/swagger/decorators/api-endpoint.decorator';
import { JwtAuth } from '@infrastructure/api/auth/decorators/jwt-auth.decorator';
import { AllowedApps } from '@infrastructure/api/request/decorators/allowed-apps.decorator';
import { DeploymentAppEnum } from '@domain/deployment/enums/deployment-app.enum';
import {
  BackendAuthResponseDto,
  BackendAuthRequestDto,
  BackendAuthUserIdentityResponseDto,
} from '@packages/common';

@ApiController('auth')
@AllowedApps(DeploymentAppEnum.ADMIN)
export class ApiAuthController {
  constructor(private readonly apiAuthService: ApiAuthService) {}

  @JwtAuth()
  @ApiGetEndpoint({
    path: 'me',
    summary: 'Get user info',
    response: {
      type: BackendAuthUserIdentityResponseDto,
    },
  })
  async me(@User() user: UserEntity): Promise<BackendAuthUserIdentityResponseDto> {
    return { id: user.id.toString() };
  }

  @JwtAuth()
  @ApiPostEndpoint({
    path: 'refresh-token',
    summary: 'Refresh jwt token',
    response: {
      type: BackendAuthResponseDto,
    },
    status: HttpStatus.OK,
  })
  async refreshToken(@User() user: UserEntity) {
    return { token: this.apiAuthService.generateToken(user) };
  }

  @ApiPostEndpoint({
    path: 'register',
    summary: 'Register new user',
    response: {
      type: BackendAuthResponseDto,
    },
  })
  async register(@Body() dto: BackendAuthRequestDto): Promise<BackendAuthResponseDto> {
    return this.apiAuthService.register(dto);
  }

  @LocalAuth()
  @ApiPostEndpoint({
    path: 'login',
    summary: 'Login',
    response: {
      type: BackendAuthResponseDto,
    },
    status: HttpStatus.OK,
  })
  async login(@User() user: UserEntity): Promise<BackendAuthResponseDto> {
    return { token: this.apiAuthService.generateToken(user) };
  }
}
