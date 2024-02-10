import { FC } from 'react';
import {
  CreateButton,
  Datagrid,
  DateField,
  EditButton,
  ExportButton,
  FilterButton,
  List,
  TextField,
  TopToolbar,
} from 'react-admin';
import { DateFilter } from '@components/filters/date.filter';
import { SearchFilter } from '@components/filters/search.filter';

const Actions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
  </TopToolbar>
);

const filters = [
  <SearchFilter alwaysOn source="email" />,
  <DateFilter label="Created after" strategy="biggerOrEqualFilter" source="createdAt" />,
  <DateFilter label="Created before" strategy="smallerOrEqualFilter" source="createdAt" />,
];

export const UserResourceList: FC = () => (
  <List actions={<Actions />} filters={filters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="email" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
      <EditButton />
    </Datagrid>
  </List>
);
