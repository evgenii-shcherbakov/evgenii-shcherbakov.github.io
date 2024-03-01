import { HttpMethodEnum } from '../../../features/http';
import type { VercelGetDeploymentsResponseDto } from '../dto/response/vercel.get-deployments.response.dto';
import type { VercelGetProjectDomainsResponseDto } from '../dto/response/vercel.get-project-domains.response.dto';
import type { VercelCreateEnvVariableRequestDto } from '../dto/request/vercel.create-env-variable.request.dto';
import type { VercelCreateEnvVariableResponseDto } from '../dto/response/vercel.create-env-variable.response.dto';

export type VercelRestApiSchema = {
  v6: {
    deployments: {
      [HttpMethodEnum.GET]: {
        response: VercelGetDeploymentsResponseDto;
      };
    };
  };
  v9: {
    projects: {
      ':projectId': {
        domains: {
          [HttpMethodEnum.GET]: {
            response: VercelGetProjectDomainsResponseDto;
          };
        };
      };
    };
  };
  v10: {
    projects: {
      ':projectId': {
        env: {
          [HttpMethodEnum.POST]: {
            request: VercelCreateEnvVariableRequestDto;
            response: VercelCreateEnvVariableResponseDto;
          };
        };
      };
    };
  };
};
