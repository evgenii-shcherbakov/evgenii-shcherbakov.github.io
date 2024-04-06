import {
  All,
  applyDecorators,
  Delete,
  Get,
  Head,
  HttpCode,
  HttpStatus,
  Options,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import {
  ApiEndpointParams,
  ApiMethodEndpointParams,
} from '@infrastructure/api/swagger/types/decorator.types';
import { HttpMethodEnum } from '@packages/common';

const getMethodDecorator = (method?: HttpMethodEnum) => {
  switch (method) {
    case HttpMethodEnum.POST:
      return Post;
    case HttpMethodEnum.PATCH:
      return Patch;
    case HttpMethodEnum.PUT:
      return Put;
    case HttpMethodEnum.DELETE:
      return Delete;
    case HttpMethodEnum.HEAD:
      return Head;
    case HttpMethodEnum.OPTIONS:
      return Options;
    case HttpMethodEnum.ALL:
      return All;
    default:
      return Get;
  }
};

export const ApiEndpoint = (params: ApiEndpointParams = {}) => {
  const responseParams = params.response ?? {};
  const methodDecorator = getMethodDecorator(params.method);

  const decorators = [
    methodDecorator(params.path),
    ApiOperation({
      summary: params.summary,
      description: params.description,
      deprecated: params.isDeprecated,
    }),
    ApiResponse({
      status: params.status ?? HttpStatus.OK,
      type: responseParams.type,
      isArray: responseParams.isArray,
    }),
  ];

  if (params.status) {
    decorators.push(HttpCode(params.status));
  }

  if (params.request) {
    decorators.push(ApiBody({ type: params.request.type, isArray: params.request.isArray }));
  }

  return applyDecorators(...decorators);
};

const methodDecoratorFactory = (method: HttpMethodEnum) => {
  return (params: ApiMethodEndpointParams = {}) => ApiEndpoint({ method, ...params });
};

export const ApiGetEndpoint = methodDecoratorFactory(HttpMethodEnum.GET);
export const ApiPostEndpoint = methodDecoratorFactory(HttpMethodEnum.POST);
export const ApiPatchEndpoint = methodDecoratorFactory(HttpMethodEnum.PATCH);
export const ApiPutEndpoint = methodDecoratorFactory(HttpMethodEnum.PUT);
export const ApiDeleteEndpoint = methodDecoratorFactory(HttpMethodEnum.DELETE);
export const ApiHeadEndpoint = methodDecoratorFactory(HttpMethodEnum.HEAD);
export const ApiOptionsEndpoint = methodDecoratorFactory(HttpMethodEnum.OPTIONS);
export const ApiAllEndpoint = methodDecoratorFactory(HttpMethodEnum.ALL);
