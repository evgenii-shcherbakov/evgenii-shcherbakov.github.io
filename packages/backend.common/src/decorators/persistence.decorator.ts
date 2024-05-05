import { SetMetadata } from '@nestjs/common';
import { DatabaseCollection } from '@packages/common';
import { MetadataKey } from 'enums';

export const Persistence = (collection: DatabaseCollection): ClassDecorator => {
  return SetMetadata(MetadataKey.PERSISTENCE_MODULE_COLLECTION, collection);
};
