import { HttpMethodEnum } from 'features/http';
import { SchemaEndpointDefinition } from 'features/rest-api';
import {
  VercelCreateEnvVariableRequest,
  VercelCreateEnvVariableResponse,
  VercelGetDeploymentsResponse,
  VercelGetProjectDomainsResponse,
} from 'domains/vercel';

export type VercelRestApiSchema = {
  v6: {
    deployments: {
      [HttpMethodEnum.GET]: SchemaEndpointDefinition<never, VercelGetDeploymentsResponse>;
    };
  };
  v9: {
    projects: {
      ':projectId': {
        domains: {
          [HttpMethodEnum.GET]: SchemaEndpointDefinition<never, VercelGetProjectDomainsResponse>;
        };
      };
    };
  };
  v10: {
    projects: {
      ':projectId': {
        env: {
          [HttpMethodEnum.POST]: SchemaEndpointDefinition<
            VercelCreateEnvVariableRequest,
            VercelCreateEnvVariableResponse
          >;
        };
      };
    };
  };
};
