import { RestApiClient, AdminRestApiSchema } from '@packages/common';

export const useApi = () => {
  const restApiClient = new RestApiClient<AdminRestApiSchema>('');

  const hash = async (input: string): Promise<string> => {
    try {
      const response = await restApiClient.typed.post('api/hash', { body: { value: input } });
      return response.value;
    } catch (exception) {
      console.error(exception);
      return '';
    }
  };

  return {
    hash,
  };
};
