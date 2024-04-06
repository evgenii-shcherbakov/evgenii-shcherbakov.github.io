'use client';

import { Button, Input, Select, SelectItem, Textarea } from '@nextui-org/react';
import { HomeSection } from 'components/home/hoc/home-section';
import { useHomeConnect } from 'components/home/home-connect/use-home-connect';
import { HomeSectionEnum } from 'enums/home-section.enum';
import { FC } from 'react';
import css from './home-connect.module.scss';

export const HomeConnect: FC = () => {
  const {
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
  } = useHomeConnect();

  return (
    <HomeSection id={HomeSectionEnum.CONNECT} className={css.section}>
      <h2 className={css.header}>Connect with me</h2>
      <form className={css.form} onSubmit={submit}>
        <Input
          {...defaultInputProps}
          {...nameField.inputProps}
          name="name"
          type="text"
          label="Name"
          placeholder="John Doe"
          isRequired
          value={nameField.value}
          onValueChange={nameField.setValue}
        />
        <Select
          variant="bordered"
          label="Way of communication"
          placeholder="Select way of communication"
          selectedKeys={contactTypeField.value}
          onSelectionChange={contactTypeField.setValue as any}
          size="lg"
        >
          {contactTypeOptions.map((contactType) => (
            <SelectItem key={contactType} value={contactType}>
              {contactType}
            </SelectItem>
          ))}
        </Select>
        <Input {...defaultInputProps} {...contactValueInputPropsStrategy[contactType]} isRequired />
        <Input
          {...defaultInputProps}
          {...subjectField.inputProps}
          name="subject"
          type="text"
          label="Subject"
          placeholder="Enter message subject"
          isRequired
          value={subjectField.value}
          onValueChange={subjectField.setValue}
        />
        <Textarea
          {...defaultInputProps}
          {...messageField.inputProps}
          name="message"
          label="Message"
          placeholder="Enter your message"
          isRequired
          value={messageField.value}
          onValueChange={messageField.setValue}
        />
        <Button
          color={isFormInvalid ? 'default' : 'primary'}
          variant="solid"
          type="submit"
          size="lg"
          disabled={isFormInvalid}
          className={css.submitBtn}
        >
          Send
        </Button>
      </form>
    </HomeSection>
  );
};
