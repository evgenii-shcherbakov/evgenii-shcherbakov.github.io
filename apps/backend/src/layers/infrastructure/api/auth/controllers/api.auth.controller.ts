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
import { AuthRequestDto } from '@infrastructure/api/auth/dto/auth.request.dto';
import { AuthResponseDto } from '@infrastructure/api/auth/dto/auth.response.dto';
import { AuthUserIdentityResponseDto } from '@infrastructure/api/auth/dto/auth.user-identity.response.dto';

@ApiController('auth')
@AllowedApps(DeploymentAppEnum.ADMIN)
export class ApiAuthController {
  constructor(private readonly apiAuthService: ApiAuthService) {}

  @JwtAuth()
  @ApiGetEndpoint({
    path: 'me',
    summary: 'Get user info',
    response: {
      type: AuthUserIdentityResponseDto,
    },
  })
  async me(@User() user: UserEntity): Promise<AuthUserIdentityResponseDto> {
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
  async refreshToken(@User() user: UserEntity): Promise<AuthResponseDto> {
    return { token: this.apiAuthService.generateToken(user) };
  }

  @ApiPostEndpoint({
    path: 'register',
    summary: 'Register new user',
    response: {
      type: AuthResponseDto,
    },
  })
  async register(@Body() dto: AuthRequestDto): Promise<AuthResponseDto> {
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
