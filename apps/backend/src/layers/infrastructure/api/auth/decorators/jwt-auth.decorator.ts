import { applyDecorators, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiUnauthorizedResponse, ApiNotFoundResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '@infrastructure/api/auth/guards/jwt-auth.guard';
import { ExceptionResponseDto } from '@infrastructure/api/exception/dto/exception.response.dto';

export const JwtAuth = () => {
  return applyDecorators(
    ApiBearerAuth(),
    ApiUnauthorizedResponse({ type: ExceptionResponseDto }),
    ApiNotFoundResponse({ type: ExceptionResponseDto }),
    UseGuards(JwtAuthGuard),
  );
};
