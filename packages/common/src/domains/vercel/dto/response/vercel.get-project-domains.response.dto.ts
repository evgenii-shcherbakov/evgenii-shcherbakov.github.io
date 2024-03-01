import { VercelPaginationResponseDto } from './vercel.pagination.response.dto';

class ExternalVercelDomain {
  readonly name: string;
  readonly apexName: string;
  readonly projectId: string;
  readonly updatedAt: number;
  readonly createdAt: number;
  readonly verified: boolean;
}

export class VercelGetProjectDomainsResponseDto extends VercelPaginationResponseDto {
  readonly domains: ExternalVercelDomain[];
}
