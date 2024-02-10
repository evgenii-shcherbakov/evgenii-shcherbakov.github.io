import { applyDecorators, UseGuards } from '@nestjs/common';
import { ApiUnauthorizedResponse, ApiNotFoundResponse, ApiBody } from '@nestjs/swagger';
import { ExceptionResponseDto } from '@infrastructure/api/exception/dto/exception.response.dto';
import { LocalAuthGuard } from '@infrastructure/api/auth/guards/local-auth.guard';
import { AuthRequestBodyDto } from '@infrastructure/api/auth/dto/request/auth-request-body.dto';

export const LocalAuth = () => {
  return applyDecorators(
    ApiBody({ type: AuthRequestBodyDto }),
    ApiUnauthorizedResponse({ type: ExceptionResponseDto }),
    ApiNotFoundResponse({ type: ExceptionResponseDto }),
    UseGuards(LocalAuthGuard),
  );
};
