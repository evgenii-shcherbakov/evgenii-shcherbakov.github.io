import React, { FC } from 'react';
import { Label, Text, useField } from 'payload/components/forms';
import { BackendAuthService } from '@admin/services/backend-auth.service';
import { Props } from 'payload/components/fields/Text';
import { Button } from 'payload/components';

export const TokenGeneratorField: FC<Props> = ({ path, label, required }) => {
  const { value: tokenValue, setValue: setTokenValue } = useField<string>({ path: 'token' });
  const { value: nameValue } = useField<string>({ path: 'name' });

  const generate = async () => {
    const token = await BackendAuthService.generateToken(nameValue);
    setTokenValue(token);
  };

  const validateToken = (value: string) => {
    if (!nameValue) return 'Name should be provided';
    if (!value || !tokenValue) return 'Token should be provided';
    return true;
  };

  return (
    <div>
      <Label htmlFor={path} label={label} required={required} />
      <Text name="token" path={path} validate={validateToken} required={required} />
      <Button onClick={generate} size="small" disabled={!nameValue}>
        Generate token
      </Button>
    </div>
  );
};
