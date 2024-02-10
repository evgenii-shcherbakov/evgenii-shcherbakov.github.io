import { compare, hash } from 'bcryptjs';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { BackendEnvironment } from '@shared/environment';
import { CryptographyService } from '@domain/cryptography/services/cryptography.service';

@Injectable()
export class CryptographyServiceImpl implements CryptographyService {
  constructor(private readonly configService: ConfigService<BackendEnvironment>) {}

  async compare(encoded: string, decoded: string): Promise<boolean> {
    return compare(encoded, decoded);
  }

  async hash(data: string): Promise<string> {
    return hash(data, this.configService.get('BCRYPT_SALT'));
  }
}
