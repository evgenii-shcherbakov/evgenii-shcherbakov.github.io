import { HttpHeadersEnum, RequestInterceptor } from '@packages/common';

export const authInterceptor: RequestInterceptor = (config) => {
  return {
    ...config,
    headers: {
      ...(config.headers ?? {}),
      [HttpHeadersEnum.AUTHORIZATION]: `Bearer ${localStorage.getItem('auth-token') ?? ''}`,
    },
  };
};
