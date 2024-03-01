import { ExternalVercelPaginationResponseDto } from './external.vercel.pagination.response.dto';

class ExternalVercelDeployment {
  readonly name: string;
  readonly url: string;
  readonly state: string;
  readonly target: string;
}

export class ExternalVercelGetDeploymentsResponseDto extends ExternalVercelPaginationResponseDto {
  readonly deployments: ExternalVercelDeployment[];
}
