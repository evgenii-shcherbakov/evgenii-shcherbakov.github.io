import { applyDecorators, UseGuards } from '@nestjs/common';
import { ApiUnauthorizedResponse, ApiNotFoundResponse, ApiBody } from '@nestjs/swagger';
import { ExceptionResponseDto } from '@infrastructure/api/exception/dto/exception.response.dto';
import { LocalAuthGuard } from '@infrastructure/api/auth/guards/local-auth.guard';
import { AuthRequestDto } from '@infrastructure/api/auth/dto/auth.request.dto';

export const LocalAuth = () => {
  return applyDecorators(
    ApiBody({ type: AuthRequestDto }),
    ApiUnauthorizedResponse({ type: ExceptionResponseDto }),
    ApiNotFoundResponse({ type: ExceptionResponseDto }),
    UseGuards(LocalAuthGuard),
  );
};
