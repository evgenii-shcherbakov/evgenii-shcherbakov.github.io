import { SliceRequestPath } from './utility';
import { HttpMethodEnum } from '../../http';

export type SchemaEndpointDefinition<Request = any, Response = any> = {
  request?: Request;
  response: Response;
};

export type SchemaEndpointType = {
  [HttpMethodEnum.GET]?: SchemaEndpointDefinition;
  [HttpMethodEnum.POST]?: SchemaEndpointDefinition;
  [HttpMethodEnum.PATCH]?: SchemaEndpointDefinition;
  [HttpMethodEnum.PUT]?: SchemaEndpointDefinition;
  [HttpMethodEnum.DELETE]?: SchemaEndpointDefinition;
  [HttpMethodEnum.OPTIONS]?: SchemaEndpointDefinition;
  [HttpMethodEnum.HEAD]?: SchemaEndpointDefinition;
  [HttpMethodEnum.ALL]?: SchemaEndpointDefinition;
};

export type SchemaType = {
  [path: string]: SchemaType | SchemaEndpointType;
};

export type SchemaEndpointOf<Schema extends SchemaType> = Schema extends SchemaEndpointType
  ? ''
  : {
      [Key in keyof Schema & string]: Schema[Key] extends SchemaEndpointType
        ? `${Key}`
        : `${Key}/${SchemaEndpointOf<Schema[Key]>}`;
    }[keyof Schema & string];

export type SchemaDefinitionOf<
  Schema extends SchemaType,
  Method extends HttpMethodEnum,
  Path extends SchemaEndpointOf<Schema>,
> = {
  [Key in keyof Schema]: Key extends Path
    ? Schema[Key][Method] extends SchemaEndpointDefinition
      ? Schema[Key][Method]
      : never
    : Schema[Key] extends SchemaType
      ? // @ts-ignore
        SliceRequestPath<Key, Path> extends SchemaEndpointOf<Schema[Key]>
        ? // @ts-ignore
          SchemaDefinitionOf<Schema[Key], Method, SliceRequestPath<Key, Path>>
        : never
      : never;
}[keyof Schema];

export type SchemaDefinitionRequestTypeOf<Definition extends SchemaEndpointDefinition | never> =
  Definition extends never ? never : Definition['request'];

export type SchemaDefinitionResponseTypeOf<Definition extends SchemaEndpointDefinition | never> =
  Definition extends never ? never : Definition['response'];
