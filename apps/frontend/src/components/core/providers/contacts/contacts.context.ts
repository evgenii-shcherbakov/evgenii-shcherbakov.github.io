'use client';

import { ContactsContextType } from 'components/core/providers/contacts/contacts.types';
import { createContext } from 'react';

export const ContactsContext = createContext<ContactsContextType>([]);
