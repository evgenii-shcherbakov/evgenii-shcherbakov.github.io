import { VercelEnvVariableTypeEnum, VercelDeploymentTargetEnum } from 'domains/vercel/enums';

export interface VercelCreateEnvVariableRequest {
  key: string;
  value: string;
  type: VercelEnvVariableTypeEnum;
  target: VercelDeploymentTargetEnum[];
}

export interface VercelCreateEnvVariableResponse {
  created: VercelCreateEnvVariableRequest;
}

export interface VercelPaginationResponse {
  pagination: {
    count: number;
    next: number | null;
    prev: number;
  };
}

interface ExternalVercelDeployment {
  name: string;
  url: string;
  state: string;
  target: string;
}

export interface VercelGetDeploymentsResponse extends VercelPaginationResponse {
  deployments: ExternalVercelDeployment[];
}

interface ExternalVercelDomain {
  readonly name: string;
  readonly apexName: string;
  readonly projectId: string;
  readonly updatedAt: number;
  readonly createdAt: number;
  readonly verified: boolean;
}

export interface VercelGetProjectDomainsResponse extends VercelPaginationResponse {
  domains: ExternalVercelDomain[];
}
