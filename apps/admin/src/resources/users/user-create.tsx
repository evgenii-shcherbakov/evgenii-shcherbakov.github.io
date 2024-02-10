import React, { FC } from 'react';
import { Create, DateInput, required, SimpleForm, TextInput } from 'react-admin';

export const UserCreate: FC = () => (
  <Create>
    <SimpleForm>
      <TextInput name="email" source="email" validate={[required()]} label="E-mail" />
      <TextInput name="password" source="password" validate={[required()]} label="Password" />
      <DateInput
        name="createdAt"
        source="createdAt"
        defaultValue={new Date()}
        label="Creation date"
      />
    </SimpleForm>
  </Create>
);
