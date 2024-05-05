import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { DatabaseCollection } from '@packages/common';
import { Experience } from 'interfaces';
import { MongoEntity } from 'schemas/abstract/mongo.entity';

@Schema({ collection: DatabaseCollection.EXPERIENCE, timestamps: true })
export class ExperienceEntity extends MongoEntity implements Experience {}

export const ExperienceSchema = SchemaFactory.createForClass(ExperienceEntity);
