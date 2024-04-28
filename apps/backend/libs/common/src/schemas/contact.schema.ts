import { Contact } from '@libs/common/interfaces';
import { MongoEntity } from '@libs/common/schemas/abstract/mongo.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BackendContactTypeEnum, Collection } from '@packages/common';

@Schema({ collection: Collection.CONTACT, timestamps: true })
export class ContactEntity extends MongoEntity implements Contact {
  @Prop({ required: false })
  link?: string;

  @Prop({ required: true, index: true, unique: true })
  name: string;

  @Prop({ required: true, index: true, enum: BackendContactTypeEnum })
  type: BackendContactTypeEnum;

  @Prop({ required: true })
  value: string;

  @Prop({ required: true, default: false })
  isPrimary: boolean;

  @Prop({ required: true, default: true })
  isVisible: boolean;
}

export const ContactSchema = SchemaFactory.createForClass(ContactEntity);

export const CONTACT = ContactEntity.name;
