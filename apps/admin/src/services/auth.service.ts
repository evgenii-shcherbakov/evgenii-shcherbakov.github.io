import type { UserIdentity } from 'react-admin';
import { HttpService } from '@/services/http.service';
import { BACKEND_URL } from '@/constants/environment';
import { AuthTokenResponse } from '@shared/auth';

type AuthData = {
  email: string;
  password: string;
};

export class AuthService {
  private readonly httpClient = new HttpService(`${BACKEND_URL}/internal/auth`);
  private readonly TOKEN_KEY = 'auth-token';

  private static cachedInstance: AuthService | undefined;

  async login(data: AuthData) {
    try {
      const { token } = await this.httpClient.post<AuthTokenResponse>('login', { body: data });

      if (!token) {
        return Promise.reject();
      }

      localStorage.setItem(this.TOKEN_KEY, token);
      return Promise.resolve();
    } catch (e) {
      return Promise.reject();
    }
  }

  async logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    return Promise.resolve();
  }

  async checkAuth() {
    return localStorage.getItem(this.TOKEN_KEY) ? Promise.resolve() : Promise.reject();
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
      const user: UserIdentity = await this.httpClient.get('me');
      return Promise.resolve(user);
    } catch (e) {
      return Promise.reject();
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
