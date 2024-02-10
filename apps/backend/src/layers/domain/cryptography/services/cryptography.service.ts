export const CRYPTOGRAPHY_SERVICE = Symbol('CryptographyService');

export interface CryptographyService {
  compare(encoded: string, decoded: string): Promise<boolean>;
  hash(data: string): Promise<string>;
}
