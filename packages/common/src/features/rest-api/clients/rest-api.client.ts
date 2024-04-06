import {
  SchemaDefinitionOf,
  SchemaDefinitionResponseTypeOf,
  SchemaEndpointOf,
  SchemaType,
} from 'features/rest-api/types/schema.types';
import { TypedRequestParamsOf } from 'features/rest-api/types/client.types';
import { HttpClient, HttpMethodEnum, RequestParams } from 'features/http';
import { RestApiMethods } from 'features/rest-api/interfaces/rest-api.methods';

export class RestApiClient<Schema extends SchemaType> extends HttpClient {
  constructor(baseUrl: string) {
    super(baseUrl);
  }

  protected typedRequestFactory<Method extends HttpMethodEnum>(method: Method) {
    //@ts-ignore
    return async <
      Endpoint extends SchemaEndpointOf<Schema>,
      Definition extends SchemaDefinitionOf<Schema, Method, Endpoint>,
    >(
      endpoint: Endpoint,
      params: TypedRequestParamsOf<Endpoint, Method, Definition>,
    ): Promise<SchemaDefinitionResponseTypeOf<Definition>> => {
      const url = endpoint
        .toString()
        .split('/')
        .map((part) => {
          if (/:\w+/g.test(part)) {
            return (
              (params.params as unknown as Record<string, string>)?.[part.replace(/^:/g, '')] ??
              'undefined'
            );
          }

          return part;
        })
        .join('/');

      const requestParams: RequestParams = {
        headers: params.headers,
        query: params.query,
      };

      //@ts-ignore
      if (method !== HttpMethodEnum.GET && params.body) {
        //@ts-ignore
        requestParams.body = params.body;
      }

      //@ts-ignore
      return this[method](url, requestParams);
    };
  }

  readonly typed: RestApiMethods<Schema> = {
    get: this.typedRequestFactory(HttpMethodEnum.GET),
    post: this.typedRequestFactory(HttpMethodEnum.POST),
    patch: this.typedRequestFactory(HttpMethodEnum.PATCH),
    put: this.typedRequestFactory(HttpMethodEnum.PUT),
    delete: this.typedRequestFactory(HttpMethodEnum.DELETE),
  };
}
