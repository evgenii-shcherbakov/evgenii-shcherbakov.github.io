export const AuthTokenRepositorySymbol = Symbol('AuthTokenRepository');

export interface AuthTokenRepository {
  isExists(name: string): Promise<boolean>;
}
