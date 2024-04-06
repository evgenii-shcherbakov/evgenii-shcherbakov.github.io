import { FC } from 'react';
import { mapper, FilterMapper } from '@features/database';
import { DateInput, DateInputProps } from 'react-admin';

type Props = Omit<DateInputProps, 'name'> & {
  strategy: keyof Omit<FilterMapper, 'searchFilter'>;
  source: string;
};

export const DateFilter: FC<Props> = ({ source, strategy, ...props }) => {
  const target = mapper[strategy](source);
  return <DateInput source={target} name={target} {...props} />;
};
