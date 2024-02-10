import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { ApiForbiddenResponse } from '@nestjs/swagger';
import { MetadataKeyEnum } from '@/enums/metadata-key.enum';
import { RequestOriginEnum } from '@infrastructure/api/cors/enums/request-origin.enum';
import { RequestOriginGuard } from '@infrastructure/api/cors/guards/request-origin.guard';
import { ExceptionResponseDto } from '@infrastructure/api/exception/dto/exception.response.dto';

export const AllowedOrigins = (...origins: RequestOriginEnum[]) => {
  const originsString = origins.join(', ');

  return applyDecorators(
    SetMetadata(MetadataKeyEnum.ALLOWED_ORIGINS, origins),
    ApiForbiddenResponse({
      description: `Request allowed only from such origins: ${originsString}. If you send request from another one - you will get exception`,
      type: ExceptionResponseDto,
    }),
    UseGuards(RequestOriginGuard),
  );
};
