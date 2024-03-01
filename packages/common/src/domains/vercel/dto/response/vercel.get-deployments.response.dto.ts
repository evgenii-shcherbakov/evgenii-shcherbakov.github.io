import { VercelPaginationResponseDto } from './vercel.pagination.response.dto';

class ExternalVercelDeployment {
  readonly name: string;
  readonly url: string;
  readonly state: string;
  readonly target: string;
}

export class VercelGetDeploymentsResponseDto extends VercelPaginationResponseDto {
  readonly deployments: ExternalVercelDeployment[];
}
