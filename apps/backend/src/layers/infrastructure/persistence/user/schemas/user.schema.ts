import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseSchema } from '@infrastructure/persistence/shared/schemas/base.schema';

export type UserDocument = User & Document;

@Schema({ collection: 'users', timestamps: true })
class User extends BaseSchema {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

export const USER = User.name;
