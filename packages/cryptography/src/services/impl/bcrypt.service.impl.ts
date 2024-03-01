import { compare, hash } from 'bcryptjs';
import { CryptographyService } from '../cryptography.service';

export class BcryptServiceImpl implements CryptographyService {
  constructor(private readonly salt: number) {}

  async compare(encoded: string, decoded: string): Promise<boolean> {
    return compare(encoded, decoded);
  }

  async hash(data: string): Promise<string> {
    return hash(data, this.salt);
  }
}
