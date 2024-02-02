import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { backendEnvValidator } from '@shared/environment';
import { MongooseModule } from '@nestjs/mongoose';
import { mongooseModuleAsyncOptions } from '@app/configs/database.config';
import { CoreModule } from '@modules/core/core.module';
import { AdminModule } from '@modules/admin/admin.module';
import { PersistenceModule } from '@modules/persistence/persistence.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: backendEnvValidator.nest,
    }),
    MongooseModule.forRootAsync(mongooseModuleAsyncOptions),
    CoreModule,
    AdminModule,
    PersistenceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
