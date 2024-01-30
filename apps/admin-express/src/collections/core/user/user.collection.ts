import { CollectionConfig } from 'payload/types';
import { AdminGroupsEnum } from '@admin/enums/admin-groups.enum';

export const UserCollection: CollectionConfig = {
  slug: 'users',
  auth: true,
  timestamps: true,
  admin: {
    useAsTitle: 'email',
    group: AdminGroupsEnum.CORE,
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
};
