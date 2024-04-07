import { MigrationStatusEnum } from '@app/common/modules/migration/enums/migration.status.enum';
import { BaseSchema } from '@app/common/schemas/base.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'migrations' })
export class Migration extends BaseSchema {
  @Prop({ required: true, index: true })
  name: string;

  @Prop({ required: true, index: true, enum: MigrationStatusEnum })
  status: MigrationStatusEnum;

  @Prop({ required: false })
  errorMessage?: string;
}

export const MigrationSchema = SchemaFactory.createForClass(Migration);
