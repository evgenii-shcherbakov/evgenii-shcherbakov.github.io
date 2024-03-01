import {
  SchemaDefinitionOf,
  SchemaDefinitionResponseTypeOf,
  SchemaEndpointOf,
  SchemaType,
} from '../types/schema';
import { HttpMethodEnum } from '../../http';
import { TypedRequestParamsOf } from '../types/client';

export interface RestApiMethods<Schema extends SchemaType> {
  get<
    Endpoint extends SchemaEndpointOf<Schema>,
    Definition extends SchemaDefinitionOf<Schema, HttpMethodEnum.GET, Endpoint>,
  >(
    endpoint: Endpoint,
    params: TypedRequestParamsOf<Endpoint, HttpMethodEnum.GET, Definition>,
  ): Promise<SchemaDefinitionResponseTypeOf<Definition>>;

  post<
    Endpoint extends SchemaEndpointOf<Schema>,
    Definition extends SchemaDefinitionOf<Schema, HttpMethodEnum.POST, Endpoint>,
  >(
    endpoint: Endpoint,
    params: TypedRequestParamsOf<Endpoint, HttpMethodEnum.POST, Definition>,
  ): Promise<SchemaDefinitionResponseTypeOf<Definition>>;

  patch<
    Endpoint extends SchemaEndpointOf<Schema>,
    Definition extends SchemaDefinitionOf<Schema, HttpMethodEnum.PATCH, Endpoint>,
  >(
    endpoint: Endpoint,
    params: TypedRequestParamsOf<Endpoint, HttpMethodEnum.PATCH, Definition>,
  ): Promise<SchemaDefinitionResponseTypeOf<Definition>>;

  put<
    Endpoint extends SchemaEndpointOf<Schema>,
    Definition extends SchemaDefinitionOf<Schema, HttpMethodEnum.PUT, Endpoint>,
  >(
    endpoint: Endpoint,
    params: TypedRequestParamsOf<Endpoint, HttpMethodEnum.PUT, Definition>,
  ): Promise<SchemaDefinitionResponseTypeOf<Definition>>;

  delete<
    Endpoint extends SchemaEndpointOf<Schema>,
    Definition extends SchemaDefinitionOf<Schema, HttpMethodEnum.DELETE, Endpoint>,
  >(
    endpoint: Endpoint,
    params: TypedRequestParamsOf<Endpoint, HttpMethodEnum.DELETE, Definition>,
  ): Promise<SchemaDefinitionResponseTypeOf<Definition>>;
}
