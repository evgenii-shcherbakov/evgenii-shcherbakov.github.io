import { SetMetadata } from '@nestjs/common';
import { MetadataKeyEnum } from '@backend/app/enums/metadata-key.enum';

export const Public = () => SetMetadata(MetadataKeyEnum.IS_PUBLIC_ENDPOINT, true);
