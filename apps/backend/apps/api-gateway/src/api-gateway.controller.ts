import { Method } from '@app/common';
import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { RegisterDto } from 'apps/api-gateway/src/dto/register.dto';
import { UserDto } from 'apps/api-gateway/src/dto/user.dto';
import { ApiGatewayService } from './api-gateway.service';

@Controller()
export class ApiGatewayController {
  constructor(private readonly apiGatewayService: ApiGatewayService) {}

  @Post('register')
  @Method({ type: UserDto, status: HttpStatus.OK })
  register(@Body() body: RegisterDto) {
    return this.apiGatewayService.register(body.email, body.password);
  }
}
