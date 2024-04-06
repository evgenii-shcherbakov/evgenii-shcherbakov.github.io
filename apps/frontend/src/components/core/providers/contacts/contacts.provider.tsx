'use client';

import { ContactsContextType } from './contacts.types';
import { FC } from 'react';
import { HOCProps } from 'types/hoc.types';
import { ContactsContext } from './contacts.context';

type Props = HOCProps & {
  contacts: ContactsContextType;
};

export const ContactsProvider: FC<Props> = ({ children, contacts }) => {
  return <ContactsContext.Provider value={contacts}>{children}</ContactsContext.Provider>;
};
