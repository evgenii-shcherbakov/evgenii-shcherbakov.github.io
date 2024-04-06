import { HttpMethodEnum, RequestQuery } from 'features/http';
import {
  SchemaDefinitionRequestTypeOf,
  SchemaEndpointDefinition,
} from 'features/rest-api/types/schema.types';
import { RouteParamsOf } from 'features/rest-api/types/utility.types';

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
