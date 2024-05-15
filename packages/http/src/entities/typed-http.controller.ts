import { pascalCase } from 'change-case-all';
import { TypedHttpAction } from 'enums';
import {
  TypedHttpAddEndpointToStrategy,
  TypedHttpControllerClass,
  TypedHttpControllerSchema,
  TypedHttpEndpointClass,
  TypedHttpEndpointStrategy,
} from 'types';

export class TypedHttpController<
  ControllerUrl extends string,
  EndpointStrategy extends TypedHttpEndpointStrategy,
> implements TypedHttpControllerClass<ControllerUrl, EndpointStrategy>
{
  private endpointStrategy: EndpointStrategy = {} as any;

  constructor(private readonly url: ControllerUrl) {}

  get endpoints(): EndpointStrategy {
    return this.endpointStrategy;
  }

  endpoint<Endpoint extends TypedHttpEndpointClass<any, any, any, any, any>>(
    input: Endpoint,
  ): TypedHttpControllerClass<
    ControllerUrl,
    TypedHttpAddEndpointToStrategy<ControllerUrl, EndpointStrategy, Endpoint>
  > {
    // @ts-ignore
    const methodSchema = this.endpointStrategy[input[TypedHttpAction.SCHEMA].method] ?? {};

    const fullUrl = `${this.url}/${input.getUrl()}`;

    const identifier =
      input[TypedHttpAction.SCHEMA].method +
      fullUrl
        .split(/[/:]/g)
        .map((partial) => pascalCase(partial))
        .join('');

    // @ts-ignore
    this.endpointStrategy[input[TypedHttpAction.SCHEMA].method] = {
      ...methodSchema,
      [identifier]: input[TypedHttpAction.INJECT_URL](this.url),
    };

    return this as any;
  }

  getUrl(): ControllerUrl {
    return this.url;
  }

  get [TypedHttpAction.SCHEMA](): TypedHttpControllerSchema<EndpointStrategy> {
    return {} as any;
  }

  get [TypedHttpAction.STRATEGY](): EndpointStrategy {
    return {} as any;
  }
}
