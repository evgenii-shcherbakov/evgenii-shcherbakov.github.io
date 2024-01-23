import { AUTH_TOKEN } from '@admin/constants/environment';
import { HttpHeadersEnum } from '@shared/core/enums/http-headers.enum';

type RequestParams<Body = Record<string, any>> = Omit<RequestInit, 'body'> & {
  body?: Body;
  query?: Record<string, string>;
};

export class HttpService {
  constructor(private readonly baseUrl = '') {}

  private get headers(): HeadersInit {
    return {
      'Content-Type': 'application/json',
      [HttpHeadersEnum.AUTHORIZATION]: `Bearer ${AUTH_TOKEN}`,
    };
  }

  private async request<Data = any, Body = Record<string, any>>(
    url: string,
    method: string,
    params: RequestParams<Body> = {}
  ): Promise<Data> {
    const fullUrl = this.baseUrl ? `${this.baseUrl}/${url}` : url;
    const fullUrlWithQuery = params.query
      ? fullUrl + '?' + new URLSearchParams(params.query).toString()
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
