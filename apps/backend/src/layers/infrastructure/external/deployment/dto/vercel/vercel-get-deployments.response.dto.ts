import { VercelApiPaginationResponseDto } from '@infrastructure/external/deployment/dto/vercel/vercel-api-pagination.response.dto';

class Deployment {
  readonly name: string;
  readonly url: string;
  readonly state: string;
  readonly target: string;
}

export class VercelGetDeploymentsResponseDto extends VercelApiPaginationResponseDto {
  readonly deployments: Deployment[];
}
