import { BACKEND_URL } from '@constants/environment';
import { HttpClient } from '@shared/core';
import { authInterceptor } from '@features/http/interceptors/auth.interceptor';

export const useBackend = () => {
  const httpClient = new HttpClient(BACKEND_URL);

  httpClient.interceptors.request.use(authInterceptor);

  const hash = async (value: string): Promise<string> => {
    const response = await httpClient.post<{ value: string }>(`cryptography/hash`, {
      body: { value },
    });

    return response.value;
  };

  return {
    hash,
  };
};
