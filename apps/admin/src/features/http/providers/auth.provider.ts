import { BACKEND_URL } from '@constants/environment';
import { AuthProvider, type UserIdentity } from 'react-admin';
import { AuthData } from '@features/http/types';
import { authInterceptor } from '@features/http/interceptors/auth.interceptor';
import { RestApiClient, BackendRestApiSchema } from '@packages/common';

export const authProvider = ((): AuthProvider => {
  const restApiClient = new RestApiClient<BackendRestApiSchema>(BACKEND_URL);
  const TOKEN_KEY = 'auth-token';

  restApiClient.interceptors.request.use(authInterceptor);

  const login = async ({ isRegister, ...dto }: AuthData) => {
    try {
      const { token } = await restApiClient.typed.post(
        isRegister ? 'auth/register' : 'auth/login',
        { body: dto },
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
      return restApiClient.typed.get('auth/me', {});
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
