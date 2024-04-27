import { AUTH_SERVICE_CLIENT } from '@apps/api-gateway/modules/auth/auth.constants';
import { RegisterDto } from '@apps/api-gateway/modules/auth/dto/register.dto';
import { UserDto } from '@apps/api-gateway/modules/auth/dto/user.dto';
import { Method } from '@libs/common';
import { Body, Controller, HttpStatus, Inject, Post } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { AuthServiceClient } from '@proto/auth';
import { plainToInstance } from 'class-transformer';
import { catchError, map, Observable, throwError } from 'rxjs';

@ApiTags('auth')
@Controller(`auth`)
export class AuthWebController {
  constructor(@Inject(AUTH_SERVICE_CLIENT) private readonly authServiceClient: AuthServiceClient) {}

  @Post('register')
  @Method({ type: UserDto, status: HttpStatus.OK })
  register(@Body() body: RegisterDto): Observable<UserDto> {
    return this.authServiceClient.register(body).pipe(
      map((user) => plainToInstance(UserDto, user)),
      catchError((exception) => throwError(() => new RpcException(exception))),
    );
  }
}
