import { FC } from 'react';
import {
  Create,
  DateInput,
  required,
  SimpleForm,
  TextInput,
  useCreateController,
} from 'react-admin';
import { FieldValues } from 'react-hook-form';
import { useApi } from '@features/http';

export const UserResourceCreate: FC = () => {
  const { save } = useCreateController();
  const { hash } = useApi();

  const submit = async (values: FieldValues) => {
    save?.({ ...values, password: await hash(values['password']) });
  };

  return (
    <Create>
      <SimpleForm onSubmit={submit}>
        <TextInput
          name="email"
          source="email"
          type="email"
          validate={[required()]}
          label="E-mail"
          fullWidth
        />
        <TextInput
          name="password"
          source="password"
          type="password"
          validate={[required()]}
          label="Password"
          fullWidth
        />
        <DateInput
          name="createdAt"
          source="createdAt"
          defaultValue={new Date()}
          label="Creation date"
          fullWidth
        />
      </SimpleForm>
    </Create>
  );
};
