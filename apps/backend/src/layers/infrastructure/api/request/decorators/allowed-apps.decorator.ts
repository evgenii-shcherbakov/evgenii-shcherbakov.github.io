import { applyDecorators, SetMetadata } from '@nestjs/common';
import { ApiForbiddenResponse } from '@nestjs/swagger';
import { DeploymentAppEnum } from '@domain/deployment/enums/deployment-app.enum';
import { ExceptionResponseDto } from '@infrastructure/api/exception/dto/exception.response.dto';
import { MetadataKeyEnum } from '@/enums/metadata-key.enum';

export const AllowedApps = (...apps: DeploymentAppEnum[]) => {
  const appsString = apps.join(', ');

  return applyDecorators(
    SetMetadata(MetadataKeyEnum.ALLOWED_APPS, apps),
    ApiForbiddenResponse({
      description: `Request allowed only from such apps: ${appsString}. If you send request from another one - you will get exception`,
      type: ExceptionResponseDto,
    }),
  );
};
