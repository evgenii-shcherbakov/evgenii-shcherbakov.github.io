import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import { BACKEND_ENV_VALIDATOR } from '@shared/constants/env-validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: BACKEND_ENV_VALIDATOR,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
