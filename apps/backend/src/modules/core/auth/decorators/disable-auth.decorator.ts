import { SetMetadata } from '@nestjs/common';
import { MetadataKeyEnum } from '@app/enums/metadata-key.enum';

export const DisableAuth = () => SetMetadata(MetadataKeyEnum.AUTH_DISABLED, true);
