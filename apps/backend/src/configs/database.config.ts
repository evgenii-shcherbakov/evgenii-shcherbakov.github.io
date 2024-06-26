import { MongooseModuleAsyncOptions } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { BackendEnvironment } from '@packages/environment';

const mongooseConnectionFactory = (configService: ConfigService<BackendEnvironment>) => {
  return {
    uri: configService.get('DATABASE_URL'),
    autoIndex: true,
    autoCreate: true,
  };
};
export const mongooseModuleAsyncOptions: MongooseModuleAsyncOptions = {
  inject: [ConfigService],
  useFactory: mongooseConnectionFactory,
};
