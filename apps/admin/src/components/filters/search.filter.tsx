import { mapper } from '@features/database';
import { FC } from 'react';
import { SearchInput, SearchInputProps } from 'react-admin';

type Props = Omit<SearchInputProps, 'name'>;

export const SearchFilter: FC<Props> = ({ source, ...props }) => {
  const target = mapper.searchFilter(source);
  return <SearchInput source={target} name={target} {...props} />;
};
