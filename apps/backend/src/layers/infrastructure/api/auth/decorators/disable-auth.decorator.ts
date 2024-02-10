import { SetMetadata } from '@nestjs/common';
import { MetadataKeyEnum } from '@/enums/metadata-key.enum';

export const DisableAuth = () => SetMetadata(MetadataKeyEnum.AUTH_DISABLED, true);
