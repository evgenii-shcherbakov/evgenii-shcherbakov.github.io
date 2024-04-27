import { DatabaseEntity } from '@libs/common';
import { Document } from 'mongoose';

export abstract class MongoEntity extends Document implements DatabaseEntity {
  readonly _id: string;
  createdAt: Date;
  updatedAt?: Date;
}
