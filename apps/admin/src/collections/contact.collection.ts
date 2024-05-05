import { BackendContactTypeEnum, DatabaseCollection } from '@packages/common';
import { CollectionConfig } from 'payload/types';

export const ContactCollection: CollectionConfig = {
  slug: DatabaseCollection.CONTACT,
  admin: {
    useAsTitle: 'name',
    listSearchableFields: ['name', 'value', 'type'],
  },
  fields: [
    {
      type: 'text',
      name: 'name',
      unique: true,
      required: true,
    },
    {
      type: 'text',
      name: 'value',
      required: true,
    },
    {
      type: 'text',
      name: 'link',
      required: false,
    },
    {
      type: 'select',
      name: 'type',
      options: Object.values(BackendContactTypeEnum),
      required: true,
    },
    {
      type: 'checkbox',
      name: 'isPrimary',
      required: true,
      defaultValue: true,
    },
    {
      type: 'checkbox',
      name: 'isVisible',
      required: true,
      defaultValue: true,
    },
  ],
};
