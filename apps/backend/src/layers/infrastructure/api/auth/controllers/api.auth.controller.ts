import { Body, HttpStatus } from '@nestjs/common';
import { ApiAuthService } from '@infrastructure/api/auth/services/api.auth.service';
import { AuthResponseDto } from '@infrastructure/api/auth/dto/response/auth-response.dto';
import { UserEntity } from '@domain/user/entities/user.entity';
import { User } from '@infrastructure/api/auth/decorators/user.decorator';
import { LocalAuth } from '@infrastructure/api/auth/decorators/local-auth.decorator';
import { ApiController } from '@infrastructure/api/swagger/decorators/api-controller.decorator';
import {
  ApiGetEndpoint,
  ApiPostEndpoint,
} from '@infrastructure/api/swagger/decorators/api-endpoint.decorator';
import { JwtAuth } from '@infrastructure/api/auth/decorators/jwt-auth.decorator';
import { UserIdentityResponseDto } from '@infrastructure/api/auth/dto/response/user-identity.response.dto';
import { AuthRequestBodyDto } from '@infrastructure/api/auth/dto/request/auth-request-body.dto';
import { AllowedApps } from '@infrastructure/api/request/decorators/allowed-apps.decorator';
import { DeploymentAppEnum } from '@domain/deployment/enums/deployment-app.enum';

@ApiController('auth')
@AllowedApps(DeploymentAppEnum.ADMIN)
export class ApiAuthController {
  constructor(private readonly apiAuthService: ApiAuthService) {}

  @JwtAuth()
  @ApiGetEndpoint({
    path: 'me',
    summary: 'Get user info',
    response: {
      type: UserIdentityResponseDto,
    },
  })
  async me(@User() user: UserEntity): Promise<UserIdentityResponseDto> {
    return { id: user.id.toString() };
  }

  @JwtAuth()
  @ApiPostEndpoint({
    path: 'refresh-token',
    summary: 'Refresh jwt token',
    response: {
      type: AuthResponseDto,
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
      type: AuthResponseDto,
    },
  })
  async register(@Body() dto: AuthRequestBodyDto): Promise<AuthResponseDto> {
    return this.apiAuthService.register(dto);
  }

  @LocalAuth()
  @ApiPostEndpoint({
    path: 'login',
    summary: 'Login',
    response: {
      type: AuthResponseDto,
    },
    status: HttpStatus.OK,
  })
  async login(@User() user: UserEntity): Promise<AuthResponseDto> {
    return { token: this.apiAuthService.generateToken(user) };
  }
}
