export class VercelPaginationResponseDto {
  readonly pagination: {
    readonly count: number;
    readonly next: number | null;
    readonly prev: number;
  };
}
