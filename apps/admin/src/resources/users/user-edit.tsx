import { DateInput, Edit, required, SimpleForm, TextInput } from 'react-admin';
import React, { FC } from 'react';

export const UserEdit: FC = () => (
  <Edit>
    <SimpleForm>
      <TextInput name="id" disabled label="Id" source="id" />
      <TextInput name="email" source="email" validate={required()} />
      <TextInput name="password" source="password" validate={required()} />
      <DateInput
        name="createdAt"
        source="createdAt"
        disabled
        defaultValue={new Date()}
        label="Creation date"
      />
      <DateInput
        name="updatedAt"
        source="updatedAt"
        disabled
        defaultValue={new Date()}
        label="Last update date"
      />
    </SimpleForm>
  </Edit>
);
