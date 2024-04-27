import { mongooseModuleAsyncOptions } from '@libs/common/modules/database/configs/mongo.config';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRootAsync(mongooseModuleAsyncOptions)],
  exports: [MongooseModule],
})
export class DatabaseModule {}
