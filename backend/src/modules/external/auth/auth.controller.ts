import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from '@backend/modules/external/auth/auth.service';
import { GenerateTokenRequestDto } from '@backend/modules/external/auth/dto/generate-token-request.dto';
import { Public } from '@backend/modules/external/auth/decorators/public.decorator';
import { GenerateTokenResponseDto } from '@backend/modules/external/auth/dto/generate-token-response.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
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
