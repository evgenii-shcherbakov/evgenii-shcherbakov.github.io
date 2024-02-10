import React, { FC } from 'react';
import { Datagrid, DateField, List, TextField } from 'react-admin';

export const UserList: FC = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="email" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </Datagrid>
  </List>
);
