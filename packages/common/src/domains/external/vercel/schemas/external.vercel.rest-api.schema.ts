import { HttpMethodEnum } from '../../../../features/http';
import type { ExternalVercelGetDeploymentsResponseDto } from '../dto/response/external.vercel.get-deployments.response.dto';
import type { ExternalVercelGetProjectDomainsResponseDto } from '../dto/response/external.vercel.get-project-domains.response.dto';

export type ExternalVercelRestApiSchema = {
  v6: {
    deployments: {
      [HttpMethodEnum.GET]: {
        response: ExternalVercelGetDeploymentsResponseDto;
      };
    };
  };
  v9: {
    projects: {
      ':projectId': {
        domains: {
          [HttpMethodEnum.GET]: {
            response: ExternalVercelGetProjectDomainsResponseDto;
          };
        };
      };
    };
  };
};
