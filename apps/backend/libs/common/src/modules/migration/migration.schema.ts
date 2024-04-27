import { MigrationStatusEnum } from '@libs/common/modules/migration/enums/migration.status.enum';
import { MongoEntity } from '@libs/common/schemas/abstract/mongo.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'migrations', timestamps: true })
export class Migration extends MongoEntity {
  @Prop({ required: true, index: true })
  name: string;

  @Prop({ required: true, index: true, enum: MigrationStatusEnum })
  status: MigrationStatusEnum;

  @Prop({ required: false })
  errorMessage?: string;
}

export const MigrationSchema = SchemaFactory.createForClass(Migration);
