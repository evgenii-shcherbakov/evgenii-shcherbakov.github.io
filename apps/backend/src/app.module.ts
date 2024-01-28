import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BACKEND_ENV_VALIDATOR } from '@shared/environment';
import { AuthModule } from './modules/external/auth/auth.module';
import { AuthTokenModule } from './modules/persistence/auth-token/auth-token.module';
import { MongooseModule } from '@nestjs/mongoose';
import { mongooseModuleAsyncOptions } from '@backend/app/configs/database.config';
import { ModuleDefinition } from '@nestjs/core/interfaces/module-definition.interface';
import { CorsModule } from './modules/external/cors/cors.module';

const externalModules: ModuleDefinition[] = [AuthModule, CorsModule];

const persistenceModules: ModuleDefinition[] = [AuthTokenModule];

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: BACKEND_ENV_VALIDATOR,
    }),
    MongooseModule.forRootAsync(mongooseModuleAsyncOptions),
    ...externalModules,
    ...persistenceModules,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
