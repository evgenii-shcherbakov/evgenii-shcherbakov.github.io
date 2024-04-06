import { Module } from '@nestjs/common';
import { ApiCryptographyController } from '@infrastructure/api/cryptography/controllers/api.cryptography.controller';
import { CryptographyModule } from '@application/cryptography/cryptography.module';

@Module({
  imports: [CryptographyModule],
  controllers: [ApiCryptographyController],
})
export class ApiCryptographyModule {}
