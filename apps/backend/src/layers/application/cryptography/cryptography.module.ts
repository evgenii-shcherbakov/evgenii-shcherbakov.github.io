import { Module } from '@nestjs/common';
import { CRYPTOGRAPHY_SERVICE } from '@domain/cryptography/services/cryptography.service';
import { CryptographyServiceImpl } from '@application/cryptography/services/cryptography.service.impl';

@Module({
  providers: [
    {
      provide: CRYPTOGRAPHY_SERVICE,
      useClass: CryptographyServiceImpl,
    },
  ],
  exports: [CRYPTOGRAPHY_SERVICE],
})
export class CryptographyModule {}
