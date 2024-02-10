import { HttpHeadersEnum } from '@shared/core';
// import { AUTH_TOKEN } from '@/constants/environment';

type RequestParams<Body = Record<string, any>> = Omit<RequestInit, 'body'> & {
  body?: Body;
  query?: Record<string, string | number | boolean>;
};

export class HttpService {
  constructor(private readonly baseUrl = '') {}

  private get headers(): HeadersInit {
    const token = localStorage.getItem('auth-token');

    return {
      [HttpHeadersEnum.CONTENT_TYPE]: 'application/json',
      [HttpHeadersEnum.AUTHORIZATION]: `Bearer ${token}`,
    };
  }

  private convertQuery(query: RequestParams['query'] = {}): Record<string, string> {
    return Object.keys(query).reduce((acc: Record<string, string>, key: string) => {
      acc[key] = String(query[key]);
      return acc;
    }, {});
  }

  private async request<Data = any, Body = Record<string, any>>(
    url: string,
    method: string,
    params: RequestParams<Body> = {}
  ): Promise<Data> {
    const fullUrl = this.baseUrl ? `${this.baseUrl}/${url}` : url;
    const fullUrlWithQuery = params.query
      ? fullUrl + '?' + new URLSearchParams(this.convertQuery(params.query)).toString()
      : fullUrl;

    const response = await fetch(fullUrlWithQuery, {
      ...params,
      method,
      body: params.body ? JSON.stringify(params.body) : undefined,
      headers: {
        ...this.headers,
        ...(params.headers ?? {}),
      },
    });

    if (response.status >= 400) {
      let errorMessage: string;

      try {
        const errorBody = await response.json();
        errorMessage = errorBody.message;
      } catch (exception) {
        errorMessage = 'Unknown exception';
      }

      throw new Error(errorMessage);
    }

    return response.json();
  }

  async get<Data>(url: string, params?: Omit<RequestParams, 'body'>): Promise<Data> {
    return this.request<Data>(url, 'GET', params);
  }

  async post<Data, Body = Record<string, any>>(
    url: string,
    params?: RequestParams<Body>
  ): Promise<Data> {
    return this.request<Data, Body>(url, 'POST', params);
  }

  async patch<Data, Body = Record<string, any>>(
    url: string,
    params?: RequestParams<Body>
  ): Promise<Data> {
    return this.request<Data, Body>(url, 'PATCH', params);
  }

  async put<Data, Body = Record<string, any>>(
    url: string,
    params?: RequestParams<Body>
  ): Promise<Data> {
    return this.request<Data, Body>(url, 'PUT', params);
  }

  async delete<Data, Body = Record<string, any>>(
    url: string,
    params?: RequestParams<Body>
  ): Promise<Data> {
    return this.request<Data, Body>(url, 'DELETE', params);
  }
}
