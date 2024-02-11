import { HttpHeadersEnum } from '../enums/http-headers.enum';
import {
  RequestInterceptor,
  RequestParams,
  ResponseInterceptor,
  RequestErrorInterceptor,
  ResponseErrorInterceptor,
} from '../types';

export class HttpService {
  private requestInterceptor: RequestInterceptor = (config) => config;
  private responseInterceptor: ResponseInterceptor = (data) => data;

  private requestErrorInterceptor: RequestErrorInterceptor = (error) => {
    throw error;
  };

  private responseErrorInterceptor: ResponseErrorInterceptor = (error) => {
    throw error;
  };

  constructor(private readonly baseUrl = '') {}

  get interceptors() {
    return {
      request: {
        use: (onRequest?: RequestInterceptor, onError?: RequestErrorInterceptor) => {
          if (onRequest) {
            this.requestInterceptor = onRequest;
          }
          if (onError) {
            this.requestErrorInterceptor = onError;
          }
        },
      },
      response: {
        use: <Data = any, Result = Data>(
          onResponse?: ResponseInterceptor<Data, Result>,
          onError?: ResponseErrorInterceptor,
        ) => {
          if (onResponse) {
            this.responseInterceptor = onResponse;
          }
          if (onError) {
            this.responseErrorInterceptor = onError;
          }
        },
      },
    };
  }

  protected get headers(): HeadersInit {
    return {
      [HttpHeadersEnum.CONTENT_TYPE]: 'application/json',
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
    params: RequestParams<Body> = {},
  ): Promise<Data> {
    const fullUrl = this.baseUrl ? `${this.baseUrl}/${url}` : url;
    const fullUrlWithQuery = params.query
      ? fullUrl + '?' + new URLSearchParams(this.convertQuery(params.query)).toString()
      : fullUrl;

    const requestInit = this.requestInterceptor({
      ...params,
      method,
      body: params.body ? JSON.stringify(params.body) : undefined,
      headers: {
        ...this.headers,
        ...(params.headers ?? {}),
      },
    });

    let response: Response;

    try {
      response = await fetch(fullUrlWithQuery, requestInit);
    } catch (error) {
      return this.requestErrorInterceptor(error as Error);
    }

    if (response.status >= 400) {
      let errorMessage: string;

      try {
        const errorBody = await response.json();
        errorMessage = errorBody.message;
      } catch (exception) {
        errorMessage = 'Unknown exception';
      }

      this.responseErrorInterceptor(new Error(errorMessage));
    }

    return this.responseInterceptor(response.json());
  }

  async get<Data>(url: string, params?: Omit<RequestParams, 'body'>): Promise<Data> {
    return this.request<Data>(url, 'GET', params);
  }

  async post<Data, Body = Record<string, any>>(
    url: string,
    params?: RequestParams<Body>,
  ): Promise<Data> {
    return this.request<Data, Body>(url, 'POST', params);
  }

  async patch<Data, Body = Record<string, any>>(
    url: string,
    params?: RequestParams<Body>,
  ): Promise<Data> {
    return this.request<Data, Body>(url, 'PATCH', params);
  }

  async put<Data, Body = Record<string, any>>(
    url: string,
    params?: RequestParams<Body>,
  ): Promise<Data> {
    return this.request<Data, Body>(url, 'PUT', params);
  }

  async delete<Data, Body = Record<string, any>>(
    url: string,
    params?: RequestParams<Body>,
  ): Promise<Data> {
    return this.request<Data, Body>(url, 'DELETE', params);
  }
}
