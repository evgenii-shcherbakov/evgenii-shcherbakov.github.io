import { SortOrderEnum } from '@infrastructure/api/shared/enums/sort-order.enum';

export type RepositoryPaginationParams = {
  page?: number;
  items?: number;
};

export type RepositorySortParams<Entity = any> = {
  sortBy?: keyof Entity | string;
  sortOrder?: SortOrderEnum;
};

export type RepositoryFilterParams = {
  ids?: string[];
};

export type RepositoryGetParams<Entity = any> = RepositoryPaginationParams &
  RepositorySortParams<Entity> &
  RepositoryFilterParams;
