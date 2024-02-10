import { HttpService } from '@features/http/services/http.service';
import { BACKEND_URL } from '@constants/environment';

export const useBackend = () => {
  const httpService = new HttpService(BACKEND_URL);

  const hash = async (value: string): Promise<string> => {
    const response = await httpService.post<{ value: string }>(`cryptography/hash`, {
      body: { value },
    });

    return response.value;
  };

  return {
    hash,
  };
};
