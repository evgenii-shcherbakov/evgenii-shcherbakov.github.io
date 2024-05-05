import { Contact } from '@packages/backend.common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BackendContactTypeEnum, DatabaseCollection } from '@packages/common';
import { MongoEntity } from 'schemas/abstract/mongo.entity';
import { MongooseSchemaType } from 'types';

@Schema({ collection: DatabaseCollection.CONTACT, timestamps: true })
export class ContactEntity extends MongoEntity implements Contact {
  @Prop({ type: MongooseSchemaType.String, required: false })
  link?: string;

  @Prop({ type: MongooseSchemaType.String, required: true, index: true, unique: true })
  name: string;

  @Prop({
    type: MongooseSchemaType.String,
    enum: BackendContactTypeEnum,
    required: true,
    index: true,
  })
  type: BackendContactTypeEnum;

  @Prop({ type: MongooseSchemaType.String, required: true })
  value: string;

  @Prop({ type: MongooseSchemaType.Boolean, required: true, default: false })
  isPrimary: boolean;

  @Prop({ type: MongooseSchemaType.Boolean, required: true, default: true })
  isVisible: boolean;
}

export const ContactSchema = SchemaFactory.createForClass(ContactEntity);
