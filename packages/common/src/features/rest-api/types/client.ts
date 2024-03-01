import { HttpMethodEnum, RequestQuery } from '../../http';
import { SchemaDefinitionRequestTypeOf, SchemaEndpointDefinition } from './schema';
import { RouteParamsOf } from './utility';

export type TypedRequestParamsOf<
  Endpoint extends string,
  Method extends HttpMethodEnum,
  EndpointDefinition extends SchemaEndpointDefinition,
> = {
  body?: Method extends 'get' ? never : SchemaDefinitionRequestTypeOf<EndpointDefinition>;
  params?: RouteParamsOf<Endpoint>;
  query?: RequestQuery;
  headers?: HeadersInit;
};
