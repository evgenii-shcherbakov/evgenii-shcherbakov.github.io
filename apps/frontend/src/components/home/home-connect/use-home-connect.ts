import { InputProps } from '@nextui-org/react';
import { useFormField } from 'hooks/use-form-field';
import { useEffect, useState } from 'react';
import { Validators } from 'utils/validators';
import { HomeConnectContactTypeEnum } from './enums/home-connect.contact-type.enum';

export const useHomeConnect = () => {
  const MESSAGE_MAX_LENGTH = 1000;

  const [contactType, setContactType] = useState(HomeConnectContactTypeEnum.TELEGRAM);
  const [isFormInvalid, setIsFormInvalid] = useState(true);

  const nameField = useFormField<string>('', [Validators.required('Name')]);
  const subjectField = useFormField<string>('', [Validators.required('Subject')]);

  const messageField = useFormField<string>('', [
    Validators.required('Message'),
    Validators.maxLength(MESSAGE_MAX_LENGTH, 'Message'),
  ]);

  const contactValueField = useFormField<string>('');

  const emailField = useFormField<string>('', [Validators.required('E-mail'), Validators.email()]);

  const telegramField = useFormField<string>('', [
    Validators.required('Telegram'),
    Validators.regexp(/^@\w*$/i, 'Telegram should have @nickname format'),
  ]);

  const contactValueFields = [emailField, telegramField, contactValueField];

  const contactTypeField = useFormField(new Set([HomeConnectContactTypeEnum.TELEGRAM]));

  useEffect(() => {
    const contactValueIsInvalidStrategy = {
      [HomeConnectContactTypeEnum.EMAIL]: emailField.isInvalid,
      [HomeConnectContactTypeEnum.TELEGRAM]: telegramField.isInvalid,
    };

    const contactValueIsInvalid = contactValueIsInvalidStrategy[contactType];

    const result =
      nameField.isInvalid ||
      contactValueIsInvalid ||
      subjectField.isInvalid ||
      messageField.isInvalid;

    setIsFormInvalid(() => result);
  }, [
    nameField.isInvalid,
    emailField.isInvalid,
    telegramField.isInvalid,
    subjectField.isInvalid,
    messageField.isInvalid,
    contactType,
  ]);

  useEffect(() => contactValueField.setValue(telegramField.value), [telegramField.value]);
  useEffect(() => contactValueField.setValue(emailField.value), [emailField.value]);

  useEffect(() => {
    contactValueFields.forEach((field) => field.reset());

    setContactType(() => {
      return contactTypeField.value.has(HomeConnectContactTypeEnum.EMAIL)
        ? HomeConnectContactTypeEnum.EMAIL
        : HomeConnectContactTypeEnum.TELEGRAM;
    });
  }, [contactTypeField.value]);

  const contactTypeOptions = Object.values(HomeConnectContactTypeEnum);

  const fields = [...contactValueFields, nameField, subjectField, messageField];

  const submit = async (event: any) => {
    event.preventDefault?.();

    const data = {
      name: nameField.value,
      contactType,
      contactValue: contactValueField.value,
      subject: subjectField.value,
      message: messageField.value,
    };

    alert(JSON.stringify(data, null, 2));
    fields.forEach((field) => field.reset());
  };

  const defaultInputProps: Pick<InputProps, 'autoComplete' | 'variant' | 'size' | 'isClearable'> = {
    autoComplete: 'off',
    variant: 'bordered',
    size: 'lg',
    isClearable: true,
  };

  const contactValueInputPropsStrategy: Record<HomeConnectContactTypeEnum, InputProps> = {
    [HomeConnectContactTypeEnum.EMAIL]: {
      ...emailField.inputProps,
      ...defaultInputProps,
      name: 'email',
      type: 'email',
      label: 'E-mail',
      placeholder: 'example@gmail.com',
      value: emailField.value,
      onValueChange: emailField.setValue,
    },
    [HomeConnectContactTypeEnum.TELEGRAM]: {
      ...telegramField.inputProps,
      ...defaultInputProps,
      name: 'telegram',
      type: 'text',
      label: 'Telegram',
      placeholder: '@example',
      value: telegramField.value,
      onValueChange: telegramField.setValue,
    },
  };

  return {
    isFormInvalid,
    contactType,
    nameField,
    subjectField,
    messageField,
    contactTypeField,
    contactTypeOptions,
    defaultInputProps,
    contactValueInputPropsStrategy,
    submit,
  };
};
