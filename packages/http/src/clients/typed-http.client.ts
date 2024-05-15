import { HttpClient } from 'clients/http.client';
import { HttpMethod } from 'enums';
import {
  HttpMethodType,
  RequestParams,
  TypedHttpClientClass,
  TypedHttpClientSchema,
  TypedHttpClientSchemaMethods,
  TypedHttpControllerSchema,
  TypedHttpEndpointSchemaOf,
  TypedHttpEndpointStrategy,
  TypedHttpEndpointUrlOf,
  TypedRequestParamsOf,
} from 'types';

export class TypedHttpClient<ClientSchema extends TypedHttpClientSchema>
  extends HttpClient
  implements TypedHttpClientClass<ClientSchema>
{
  public readonly typed: TypedHttpClientSchemaMethods<ClientSchema>;

  constructor(
    private readonly clientSchema: ClientSchema,
    baseUrl: string,
  ) {
    super(baseUrl);
    this.typed = this.generateTypedMethods(this.clientSchema);
  }

  private generateTypedMethods(schema: ClientSchema): TypedHttpClientSchemaMethods<ClientSchema> {
    return Object.keys(schema).reduce((acc: TypedHttpClientSchemaMethods<ClientSchema>, key) => {
      return {
        ...acc,
        [key]: {
          [HttpMethod.GET]: this.typedRequestFactory(HttpMethod.GET),
          [HttpMethod.POST]: this.typedRequestFactory(HttpMethod.POST),
          [HttpMethod.PATCH]: this.typedRequestFactory(HttpMethod.PATCH),
          [HttpMethod.PUT]: this.typedRequestFactory(HttpMethod.PUT),
          [HttpMethod.DELETE]: this.typedRequestFactory(HttpMethod.DELETE),
        },
      };
    }, {} as any);
  }

  protected typedRequestFactory<
    EndpointStrategy extends TypedHttpEndpointStrategy,
    ControllerSchema extends TypedHttpControllerSchema<EndpointStrategy>,
    Method extends HttpMethodType,
  >(method: Method) {
    return async <
      Url extends TypedHttpEndpointUrlOf<Method, EndpointStrategy, ControllerSchema>,
      EndpointSchema extends TypedHttpEndpointSchemaOf<
        Method,
        EndpointStrategy,
        ControllerSchema,
        Url
      >,
      Params extends TypedRequestParamsOf<Url, Method, EndpointSchema['request']>,
      Response extends EndpointSchema['response'],
    >(
      endpoint: Url,
      params: Params,
    ): Promise<Response> => {
      const url = endpoint
        .toString()
        .split('/')
        .map((part) => {
          if (/:\w+/g.test(part)) {
            return (
              // @ts-ignore
              (params['params'] as unknown as Record<string, string>)?.[part.replace(/^:/g, '')] ??
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
      if (method !== 'get' && params['body']) {
        //@ts-ignore
        requestParams.body = params['body'];
      }

      //@ts-ignore
      return this[method](url, requestParams);
    };
  }
}
