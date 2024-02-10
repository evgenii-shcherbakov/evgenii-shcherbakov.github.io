import type { UserIdentity } from 'react-admin';
import { HttpService } from '@/services/http.service';
import { BACKEND_URL } from '@/constants/environment';
import { AuthTokenResponse } from '@shared/auth';

type AuthData = {
  email: string;
  password: string;
  isRegister: boolean;
};

export class AuthService {
  private readonly httpClient = new HttpService(`${BACKEND_URL}/auth`);
  private readonly TOKEN_KEY = 'auth-token';

  private static cachedInstance: AuthService | undefined;

  async login(data: AuthData) {
    try {
      const { token } = await this.httpClient.post<AuthTokenResponse>(
        data.isRegister ? 'register' : 'login',
        { body: data }
      );

      if (!token) {
        return Promise.reject(new Error('No jwt token in server response'));
      }

      localStorage.setItem(this.TOKEN_KEY, token);
      return Promise.resolve();
    } catch (exception) {
      return Promise.reject(exception);
    }
  }

  async logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    return Promise.resolve();
  }

  async checkAuth() {
    return localStorage.getItem(this.TOKEN_KEY)
      ? Promise.resolve()
      : Promise.reject(new Error('JWT token is missing'));
  }

  async checkError(error: any) {
    const status = error?.status;

    if (status === 401 || status === 403) {
      localStorage.removeItem(this.TOKEN_KEY);
      return Promise.reject();
    }

    return Promise.resolve();
  }

  async getIdentity(): Promise<UserIdentity> {
    try {
      return this.httpClient.get('me');
    } catch (exception) {
      return Promise.reject(exception);
    }
  }

  async getPermissions() {
    return Promise.resolve('');
  }

  static get instance(): AuthService {
    if (AuthService.cachedInstance) {
      return AuthService.cachedInstance;
    }

    AuthService.cachedInstance = new this();
    return AuthService.cachedInstance;
  }
}
