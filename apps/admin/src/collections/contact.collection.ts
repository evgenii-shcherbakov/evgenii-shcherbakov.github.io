import { BackendContactTypeEnum, Collection } from '@packages/common';
import { CollectionConfig } from 'payload/types';

export const ContactCollection: CollectionConfig = {
  slug: Collection.CONTACT,
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
