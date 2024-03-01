import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { backendEnvValidator } from '@packages/environment';
import { MongooseModule } from '@nestjs/mongoose';
import { mongooseModuleAsyncOptions } from '@/configs/database.config';
import { ApiModule } from '@infrastructure/api/api.module';
import { PersistenceModule } from '@infrastructure/persistence/persistence.module';
import { CacheModule } from '@nestjs/cache-manager';
import { ExternalModule } from '@infrastructure/external/external.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: backendEnvValidator.toJoiValidator(),
    }),
    MongooseModule.forRootAsync(mongooseModuleAsyncOptions),
    CacheModule.register({ isGlobal: true }),
    ApiModule,
    PersistenceModule,
    ExternalModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
