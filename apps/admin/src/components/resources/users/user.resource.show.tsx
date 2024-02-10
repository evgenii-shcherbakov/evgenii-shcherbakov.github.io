import { FC } from 'react';
import { DateField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const UserResourceShow: FC = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="email" />
        <DateField source="createdAt" label="Creation date" />
        <DateField source="updatedAt" label="Last update date" />
      </SimpleShowLayout>
    </Show>
  );
};
