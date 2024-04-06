import { Body, Controller, Post } from '@nestjs/common';
import { ApiGatewayService } from './api-gateway.service';

@Controller()
export class ApiGatewayController {
  constructor(private readonly apiGatewayService: ApiGatewayService) {}

  @Post('register')
  register(@Body('email') email: string, @Body('password') password: string) {
    return this.apiGatewayService.register(email, password);
  }
}
