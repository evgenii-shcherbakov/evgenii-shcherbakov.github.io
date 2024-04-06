import { InputProps } from '@nextui-org/react';
import { useEffect, useMemo, useState } from 'react';
import { FieldValidator } from 'types/form.types';

export const useFormField = <Type = any>(
  defaultValue: Type,
  validators: FieldValidator<Type>[] = [],
) => {
  const [isChanged, setIsChanged] = useState(false);
  const [value, setValue] = useState(defaultValue);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

  const validate = () => {
    return validators.every((validator) => {
      const result = validator(value);

      if (isChanged && typeof result === 'string') {
        setErrorMessage(() => result);
        return false;
      }

      setErrorMessage(() => undefined);
      return true;
    });
  };

  useEffect(() => {
    if (!isChanged) {
      setIsChanged(() => true);
    }
  }, [value]);

  const isInvalid = useMemo(() => !validate(), [value]);

  const setValueProxy = (value: Type) => setValue(() => value);

  const reset = () => {
    setValue(() => defaultValue);
    setIsChanged(() => false);
    setErrorMessage(() => undefined);
  };

  const inputProps: Pick<InputProps, 'isInvalid' | 'errorMessage' | 'color'> = {
    isInvalid,
    errorMessage,
    color: isInvalid ? 'danger' : 'success',
  };

  return {
    value,
    isInvalid,
    errorMessage,
    inputProps,
    setValue: setValueProxy,
    reset,
  };
};
