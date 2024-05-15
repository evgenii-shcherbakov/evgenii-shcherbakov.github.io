import { TypedHttpAction } from 'enums';
import { HttpClientClass } from 'interfaces';
import { RequestQuery } from 'types/http.types';
import { RouteParamsOf, TransformUrlToIdentifier } from 'types/utility.types';

export type HttpMethodType = 'get' | 'post' | 'patch' | 'put' | 'delete';

export type TypedHttpEndpointStrategy = {};

export type TypedHttpEndpointIdentifierFromUrl<
  Method extends HttpMethodType,
  ControllerUrl extends string,
  EndpointUrl extends string,
> = `${Method}${TransformUrlToIdentifier<ControllerUrl>}${TransformUrlToIdentifier<EndpointUrl>}`;

export type TypedHttpEndpointIdentifierFromFullUrl<
  Method extends HttpMethodType,
  FullUrl extends string,
> = `${Method}${TransformUrlToIdentifier<FullUrl>}`;

export type TypedHttpEndpointSchema<
  FullUrl extends string,
  Method extends HttpMethodType,
  Request,
  Response,
> = {
  fullUrl: FullUrl;
  method: Method;
  request: Request;
  response: Response;
};

export type TypedHttpClientSchema = {
  [key: string]: TypedHttpControllerClass<any, any>;
};

export interface TypedHttpEndpointClass<
  ControllerUrl extends string,
  Url extends string,
  Method extends HttpMethodType,
  Request = undefined,
  Response = undefined,
> {
  request<Request>(): TypedHttpEndpointClass<ControllerUrl, Url, Method, Request, Response>;
  response<Response>(): TypedHttpEndpointClass<ControllerUrl, Url, Method, Request, Response>;

  readonly [TypedHttpAction.SCHEMA]: TypedHttpEndpointSchema<
    `${ControllerUrl}/${Url}`,
    Method,
    Request,
    Response
  >;

  [TypedHttpAction.INJECT_URL](
    url: string,
  ): TypedHttpEndpointClass<ControllerUrl, Url, Method, Request, Response>;

  getUrl(): Url;
}

export type TypedHttpControllerSchema<EndpointStrategy extends TypedHttpEndpointStrategy> = {
  [Method in HttpMethodType]: {
    [Identifier in keyof EndpointStrategy]: EndpointStrategy[Identifier] extends TypedHttpEndpointClass<
      any,
      any,
      any,
      any,
      any
    >
      ? EndpointStrategy[Identifier][TypedHttpAction.SCHEMA]
      : never;
  };
};

export type TypedHttpAddEndpointToStrategy<
  ControllerUrl extends string,
  EndpointStrategy extends TypedHttpEndpointStrategy,
  Endpoint extends TypedHttpEndpointClass<any, any, any, any, any>,
> = EndpointStrategy & {
  [Identifier in ReturnType<Endpoint['getUrl']> as TypedHttpEndpointIdentifierFromUrl<
    Endpoint[TypedHttpAction.SCHEMA]['method'],
    ControllerUrl,
    ReturnType<Endpoint['getUrl']>
  >]: TypedHttpEndpointClass<
    ControllerUrl,
    ReturnType<Endpoint['getUrl']>,
    Endpoint[TypedHttpAction.SCHEMA]['method'],
    Endpoint[TypedHttpAction.SCHEMA]['request'],
    Endpoint[TypedHttpAction.SCHEMA]['response']
  >;
};

export type TypedHttpEndpointUrlOf<
  Method extends HttpMethodType,
  Strategy extends TypedHttpEndpointStrategy,
  ControllerSchema extends TypedHttpControllerSchema<Strategy>,
> = {
  [Identifier in keyof ControllerSchema[Method]]: `${ControllerSchema[Method][Identifier]['fullUrl']}`;
}[keyof ControllerSchema[Method]];

export type TypedHttpEndpointSchemaOf<
  Method extends HttpMethodType,
  Strategy extends TypedHttpEndpointStrategy,
  ControllerSchema extends TypedHttpControllerSchema<Strategy>,
  FullUrl extends TypedHttpEndpointUrlOf<Method, Strategy, ControllerSchema>,
  // @ts-ignore
> = ControllerSchema[Method][TypedHttpEndpointIdentifierFromFullUrl<Method, FullUrl>];

export type TypedRequestBody<Method extends HttpMethodType, Request> = Method extends 'get'
  ? {}
  : Request extends undefined
    ? {}
    : {
        body: Request;
      };

export type TypedRequestParam<FullUrl extends string> =
  RouteParamsOf<FullUrl> extends undefined
    ? {}
    : {
        params: RouteParamsOf<FullUrl>;
      };

export type TypedRequestParamsOf<
  FullUrl extends string,
  Method extends HttpMethodType,
  Request,
> = TypedRequestBody<Method, Request> &
  TypedRequestParam<FullUrl> & {
    query?: RequestQuery;
    headers?: HeadersInit;
  };

export type TypedHttpClientMethods<
  EndpointStrategy extends TypedHttpEndpointStrategy,
  ControllerSchema extends TypedHttpControllerSchema<EndpointStrategy>,
> = {
  get<
    Url extends TypedHttpEndpointUrlOf<'get', EndpointStrategy, ControllerSchema>,
    EndpointSchema extends TypedHttpEndpointSchemaOf<
      'get',
      EndpointStrategy,
      ControllerSchema,
      Url
    >,
    Params extends TypedRequestParamsOf<Url, 'get', EndpointSchema['request']>,
    Response extends EndpointSchema['response'],
  >(
    endpoint: Url,
    params: Params,
  ): Promise<Response>;

  post<
    Url extends TypedHttpEndpointUrlOf<'post', EndpointStrategy, ControllerSchema>,
    EndpointSchema extends TypedHttpEndpointSchemaOf<
      'post',
      EndpointStrategy,
      ControllerSchema,
      Url
    >,
    Params extends TypedRequestParamsOf<Url, 'post', EndpointSchema['request']>,
    Response extends EndpointSchema['response'],
  >(
    endpoint: Url,
    params: Params,
  ): Promise<Response>;

  patch<
    Url extends TypedHttpEndpointUrlOf<'patch', EndpointStrategy, ControllerSchema>,
    EndpointSchema extends TypedHttpEndpointSchemaOf<
      'patch',
      EndpointStrategy,
      ControllerSchema,
      Url
    >,
    Params extends TypedRequestParamsOf<Url, 'patch', EndpointSchema['request']>,
    Response extends EndpointSchema['response'],
  >(
    endpoint: Url,
    params: Params,
  ): Promise<Response>;

  put<
    Url extends TypedHttpEndpointUrlOf<'put', EndpointStrategy, ControllerSchema>,
    EndpointSchema extends TypedHttpEndpointSchemaOf<
      'put',
      EndpointStrategy,
      ControllerSchema,
      Url
    >,
    Params extends TypedRequestParamsOf<Url, 'put', EndpointSchema['request']>,
    Response extends EndpointSchema['response'],
  >(
    endpoint: Url,
    params: Params,
  ): Promise<Response>;

  delete<
    Url extends TypedHttpEndpointUrlOf<'delete', EndpointStrategy, ControllerSchema>,
    EndpointSchema extends TypedHttpEndpointSchemaOf<
      'delete',
      EndpointStrategy,
      ControllerSchema,
      Url
    >,
    Params extends TypedRequestParamsOf<Url, 'delete', EndpointSchema['request']>,
    Response extends EndpointSchema['response'],
  >(
    endpoint: Url,
    params: Params,
  ): Promise<Response>;
};

export type TypedHttpClientSchemaMethods<ClientSchema extends TypedHttpClientSchema> = {
  [Key in keyof ClientSchema]: TypedHttpClientMethods<
    ClientSchema[Key][TypedHttpAction.STRATEGY],
    ClientSchema[Key][TypedHttpAction.SCHEMA]
  >;
};

export interface TypedHttpControllerClass<
  ControllerUrl extends string,
  EndpointStrategy extends TypedHttpEndpointStrategy,
> {
  readonly endpoints: EndpointStrategy;
  readonly [TypedHttpAction.SCHEMA]: TypedHttpControllerSchema<EndpointStrategy>;
  readonly [TypedHttpAction.STRATEGY]: EndpointStrategy;

  endpoint<Endpoint extends TypedHttpEndpointClass<any, any, any, any, any>>(
    input: Endpoint,
  ): TypedHttpControllerClass<
    ControllerUrl,
    TypedHttpAddEndpointToStrategy<ControllerUrl, EndpointStrategy, Endpoint>
  >;

  getUrl(): ControllerUrl;
}

export interface TypedHttpClientClass<ClientSchema extends TypedHttpClientSchema>
  extends HttpClientClass {
  readonly typed: TypedHttpClientSchemaMethods<ClientSchema>;
}
