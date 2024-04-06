'use client';

import { FC, ReactNode, useContext } from 'react';
import { ContactsContext } from 'components/core/providers/contacts';
import css from './contacts-list.module.scss';
import { Button, Link } from '@nextui-org/react';
import { ContactIcon } from 'components/core/contact-icon';

export const ContactsList: FC = () => {
  const contacts = useContext(ContactsContext);

  return (
    <div className={css.container}>
      {contacts.reduce((acc: ReactNode[], contact) => {
        if (!contact.link) {
          return acc;
        }

        acc.push(
          <Button
            as={Link}
            isIconOnly
            variant="flat"
            key={contact.name}
            href={contact.link}
            target="_blank"
            className={css.item}
            size="md"
          >
            <ContactIcon contactType={contact.type} size={25} />
          </Button>,
        );
        return acc;
      }, [])}
    </div>
  );
};
