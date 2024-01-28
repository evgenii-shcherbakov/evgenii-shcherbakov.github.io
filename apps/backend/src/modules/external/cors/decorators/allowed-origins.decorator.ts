import { applyDecorators, SetMetadata } from '@nestjs/common';
import { RequestOriginEnum } from '@backend/modules/external/cors/enums/request-origin.enum';
import { MetadataKeyEnum } from '@backend/app/enums/metadata-key.enum';
import { ApiInternalServerErrorResponse } from '@nestjs/swagger';

export const AllowedOrigins = (...origins: RequestOriginEnum[]) => {
  const originsString = origins.join(', ');

  return applyDecorators(
    SetMetadata(MetadataKeyEnum.ALLOWED_ORIGINS, origins),
    ApiInternalServerErrorResponse({
      description: `Request allowed only from such origins: ${originsString}. If you send request from another one - you will get exception`,
    }),
  );
};
