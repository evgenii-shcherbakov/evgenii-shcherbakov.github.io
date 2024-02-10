import { FC } from 'react';
import { DateInput, Edit, required, SimpleForm, TextInput, useEditController } from 'react-admin';
import { FieldValues } from 'react-hook-form';
import { useBackend } from '@features/http';

export const UserResourceEdit: FC = () => {
  const { save } = useEditController();
  const { hash } = useBackend();

  const submit = async (values: FieldValues) => {
    save?.({ ...values, password: await hash(values['password']) });
  };

  return (
    <Edit>
      <SimpleForm onSubmit={submit}>
        <TextInput disabled name="id" source="id" fullWidth />
        <TextInput name="email" source="email" type="email" validate={required()} fullWidth />
        <TextInput
          name="password"
          source="password"
          type="password"
          validate={required()}
          fullWidth
        />
        <DateInput
          name="createdAt"
          source="createdAt"
          defaultValue={new Date()}
          label="Creation date"
          fullWidth
        />
        <DateInput
          name="updatedAt"
          source="updatedAt"
          defaultValue={new Date()}
          label="Last update date"
          fullWidth
        />
      </SimpleForm>
    </Edit>
  );
};
