import { CollectionConfig } from 'payload/types';
import { TokenGeneratorField } from '@admin/collections/core/auth-token/components/token-generator-field';
import { TokenGeneratorCell } from '@admin/collections/core/auth-token/components/token-generator-cell';
import { AdminGroupsEnum } from '@admin/enums/admin-groups.enum';

export const AuthTokenCollection: CollectionConfig = {
  slug: 'auth_tokens',
  timestamps: true,
  admin: {
    useAsTitle: 'name',
    listSearchableFields: ['name', 'token'],
    group: AdminGroupsEnum.CORE,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'token',
      type: 'text',
      required: true,
      admin: {
        components: {
          Field: TokenGeneratorField,
          Cell: TokenGeneratorCell,
        },
      },
    },
  ],
};
