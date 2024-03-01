import {
  SchemaDefinitionOf,
  SchemaDefinitionResponseTypeOf,
  SchemaEndpointOf,
  SchemaType,
} from '../types/schema';
import { TypedRequestParamsOf } from '../types/client';
import { HttpClient, HttpMethodEnum, RequestParams } from '../../http';
import { RestApiMethods } from '../interfaces/rest-api.methods';

export class RestApiClient<Schema extends SchemaType> extends HttpClient {
  constructor(baseUrl: string) {
    super(baseUrl);
  }

  protected typedRequestFactory<Method extends HttpMethodEnum>(method: Method) {
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
              (params.params as Record<string, string>)?.[part.replace(/^:/g, '')] ?? 'undefined'
            );
          }

          return part;
        })
        .join('/');

      const requestParams: RequestParams = {
        headers: params.headers,
        query: params.query,
      };

      if (method !== HttpMethodEnum.GET && params.body) {
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
