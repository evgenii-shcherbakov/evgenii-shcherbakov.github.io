import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type AuthTokenDocument = AuthToken & Document;

@Schema({ collection: 'auth_tokens', timestamps: true })
class AuthToken {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  token: string;

  createdAt?: Date;
  updatedAt?: Date;
  __v?: number;
}

export const AuthTokenSchema = SchemaFactory.createForClass(AuthToken);

export const AuthTokenSymbol = AuthToken.name;
