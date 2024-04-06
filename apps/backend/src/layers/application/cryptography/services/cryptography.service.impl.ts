import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { BackendEnvironment } from '@packages/environment';
import { BcryptServiceImpl } from '@packages/cryptography';
import { CryptographyService } from '@domain/cryptography/services/cryptography.service';

@Injectable()
export class CryptographyServiceImpl extends BcryptServiceImpl implements CryptographyService {
  constructor(configService: ConfigService<BackendEnvironment>) {
    super(configService.get('BCRYPT_SALT'));
  }
}
