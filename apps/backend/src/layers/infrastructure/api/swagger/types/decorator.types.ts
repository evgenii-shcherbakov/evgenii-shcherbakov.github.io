import { ApiResponseMetadata } from '@nestjs/swagger/dist/decorators/api-response.decorator';
import { HttpStatus } from '@nestjs/common';
import { HttpMethodEnum } from '@packages/common';

type Body = {
  type?: ApiResponseMetadata['type'];
  isArray?: boolean;
};

export type ApiEndpointParams = {
  method?: HttpMethodEnum;
  path?: string | string[];
  request?: Body;
  response?: Body;
  summary?: string;
  description?: string;
  status?: HttpStatus;
  isDeprecated?: boolean;
};

export type ApiMethodEndpointParams = Omit<ApiEndpointParams, 'method'>;
