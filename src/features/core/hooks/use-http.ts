namespace HttpClient {
  export interface GetParams {
    headers?: HeadersInit;
    signal?: AbortSignal;
    query?: Record<string, string>;
  }

  export interface Params extends GetParams {
    body?: object;
  }
}

export const useHttp = () => {
  const httpMethodFactory = <ParamsType extends HttpClient.GetParams = HttpClient.Params>(
    method: string,
  ) => {
    return async <Data>(url: string, params?: ParamsType): Promise<Data> => {
      const queryString = params?.query ? `?${new URLSearchParams(params.query).toString()}` : '';
      const bodyField = (params as any)?.body;

      const response = await fetch(url + queryString, {
        method,
        body: bodyField ? JSON.stringify(bodyField) : undefined,
        headers: {
          'Content-type': 'application/json',
          ...(params?.headers ?? {}),
        },
        signal: params?.signal,
      });
      return response.json();
    };
  };

  const Get = httpMethodFactory<HttpClient.GetParams>('GET');
  const Post = httpMethodFactory('POST');
  const Patch = httpMethodFactory('PATCH');
  const Put = httpMethodFactory('PUT');
  const Delete = httpMethodFactory('DELETE');

  return { Get, Post, Patch, Put, Delete };
};
