import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from '@modules/core/auth/auth.service';
import { GenerateTokenRequestDto } from '@modules/core/auth/dto/generate-token-request.dto';
import { GenerateTokenResponseDto } from '@modules/core/auth/dto/generate-token-response.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AllowedOrigins } from '@modules/core/cors/decorators/allowed-origins.decorator';
import { RequestOriginEnum } from '@modules/core/cors/enums/request-origin.enum';
import { DisableAuth } from '@modules/core/auth/decorators/disable-auth.decorator';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @DisableAuth()
  @AllowedOrigins(RequestOriginEnum.ADMIN)
  @ApiOperation({ summary: 'Generate new JWT token' })
  @ApiResponse({ type: GenerateTokenResponseDto, status: HttpStatus.OK })
  @Post('generate-token')
  @HttpCode(HttpStatus.OK)
  async generateToken(@Body() dto: GenerateTokenRequestDto): Promise<GenerateTokenResponseDto> {
    return { token: this.authService.generateToken(dto.name) };
  }

  // @Get()
  // // @ApiHeader({ name: 'Authorization', required: true })
  // @ApiBearerAuth()
  // async test() {
  //   return { success: true };
  // }
}
