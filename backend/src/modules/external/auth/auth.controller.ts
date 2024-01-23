import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from '@backend/modules/external/auth/auth.service';
import { GenerateTokenRequestDto } from '@backend/modules/external/auth/dto/generate-token-request.dto';
import { Public } from '@backend/modules/external/auth/decorators/public.decorator';
import { GenerateTokenResponseDto } from '@backend/modules/external/auth/dto/generate-token-response.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AllowedOrigins } from '@backend/modules/external/cors/decorators/allowed-origins.decorator';
import { RequestOriginEnum } from '@backend/modules/external/cors/enums/request-origin.enum';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
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
