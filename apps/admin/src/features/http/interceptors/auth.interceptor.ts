import { HttpHeadersEnum, RequestInterceptor } from '@shared/core';

export const authInterceptor: RequestInterceptor = (config) => {
  return {
    ...config,
    headers: {
      ...(config.headers ?? {}),
      [HttpHeadersEnum.AUTHORIZATION]: `Bearer ${localStorage.getItem('auth-token') ?? ''}`,
    },
  };
};
