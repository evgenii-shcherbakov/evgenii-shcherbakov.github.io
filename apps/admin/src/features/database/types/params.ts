export type FilterObject = Record<string, any>;

export type DatabaseServicePaginationParams = {
  page: number;
  items: number;
};

export type DatabaseServiceSortParams = {
  sortBy?: string;
  sortOrder?: string;
};

export type DatabaseServiceFilterParams<Id = any> = {
  ids: Id[];
  filter: FilterObject;
};

export type DatabaseServiceParams<Id = any> = DatabaseServicePaginationParams &
  DatabaseServiceSortParams &
  DatabaseServiceFilterParams<Id>;
