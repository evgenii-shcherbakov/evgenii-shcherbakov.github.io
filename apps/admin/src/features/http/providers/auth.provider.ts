import { BACKEND_URL } from '@constants/environment';
import { AuthProvider, type UserIdentity } from 'react-admin';
import { AuthData } from '@features/http/types';
import { AuthTokenResponse } from '@shared/auth';
import { HttpClient } from '@shared/core';
import { authInterceptor } from '@features/http/interceptors/auth.interceptor';

export const authProvider = ((): AuthProvider => {
  const httpClient = new HttpClient(`${BACKEND_URL}/auth`);
  const TOKEN_KEY = 'auth-token';

  httpClient.interceptors.request.use(authInterceptor);

  const login = async (data: AuthData) => {
    try {
      const { token } = await httpClient.post<AuthTokenResponse>(
        data.isRegister ? 'register' : 'login',
        { body: data },
      );

      if (!token) {
        return Promise.reject(new Error('No jwt token in server response'));
      }

      localStorage.setItem(TOKEN_KEY, token);
      return Promise.resolve();
    } catch (exception) {
      return Promise.reject(exception);
    }
  };

  const logout = async () => {
    localStorage.removeItem(TOKEN_KEY);
    return Promise.resolve();
  };

  const checkAuth = async () => {
    return localStorage.getItem(TOKEN_KEY)
      ? Promise.resolve()
      : Promise.reject(new Error('JWT token is missing'));
  };

  const checkError = async (error: any) => {
    const status = error?.status;

    if (status === 401 || status === 403) {
      localStorage.removeItem(TOKEN_KEY);
      return Promise.reject();
    }

    return Promise.resolve();
  };

  const getIdentity = async (): Promise<UserIdentity> => {
    try {
      return httpClient.get('me');
    } catch (exception) {
      return Promise.reject(exception);
    }
  };

  const getPermissions = async () => {
    return Promise.resolve('');
  };

  return {
    login,
    logout,
    checkAuth,
    checkError,
    getIdentity,
    getPermissions,
  };
})();
