import { VercelApiPaginationResponseDto } from '@infrastructure/external/deployment/dto/vercel/vercel-api-pagination.response.dto';

class Domain {
  readonly name: string;
  readonly apexName: string;
  readonly projectId: string;
  readonly updatedAt: number;
  readonly createdAt: number;
  readonly verified: boolean;
}

export class VercelGetProjectDomainsResponseDto extends VercelApiPaginationResponseDto {
  readonly domains: Domain[];
}
