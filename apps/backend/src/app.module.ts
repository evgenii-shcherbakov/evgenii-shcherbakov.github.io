import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { backendEnvValidator } from '@shared/environment';
import { MongooseModule } from '@nestjs/mongoose';
import { mongooseModuleAsyncOptions } from '@/configs/database.config';
import { ApiModule } from '@infrastructure/api/api.module';
import { PersistenceModule } from '@infrastructure/persistence/persistence.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: backendEnvValidator.nest,
    }),
    MongooseModule.forRootAsync(mongooseModuleAsyncOptions),
    ApiModule,
    PersistenceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
