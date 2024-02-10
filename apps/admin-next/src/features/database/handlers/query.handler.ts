import { DatabaseServiceParams } from '@features/database/types/params';
import { Identifier } from 'react-admin';

export const queryHandler = <Id extends Identifier = any>(
  query: URLSearchParams,
): DatabaseServiceParams<Id> => {
  const page = +(query.get('page') ?? 1);
  const items = +(query.get('items') ?? 10);
  const sortBy = query.get('sortBy') ?? '';
  const sortOrder = query.get('sortOrder') ?? '';
  const ids: Id[] = query.has('ids') ? JSON.parse(query.get('ids')!) : [];
  const filter: object = query.has('filter') ? JSON.parse(query.get('filter')!) : {};

  return {
    page,
    items,
    sortBy,
    sortOrder,
    ids,
    filter,
  };
};
