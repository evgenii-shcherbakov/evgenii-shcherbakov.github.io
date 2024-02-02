import React, { FC } from 'react';
import {
  Resource,
  List,
  Datagrid,
  TextField,
  DateField,
  BooleanField,
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  required,
  Edit,
} from 'react-admin';

export const UserList: FC = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="email" />
      <DateField source="created_at" />
      <DateField source="updated_at" />
    </Datagrid>
  </List>
);

export const UserCreate: FC = () => (
  <Create>
    <SimpleForm>
      <TextInput source="email" validate={[required()]} label="E-mail" />
      <TextInput source="password" validate={[required()]} label="Password" />
      <DateInput source="created_at" defaultValue={new Date()} label="Creation date" />
    </SimpleForm>
  </Create>
);

export const UserEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="email" validate={required()} />
      <TextInput source="password" validate={required()} />
      <DateInput disabled source="created_at" defaultValue={new Date()} label="Creation date" />
      <DateInput disabled source="updated_at" defaultValue={new Date()} label="Last update date" />
    </SimpleForm>
  </Edit>
);
