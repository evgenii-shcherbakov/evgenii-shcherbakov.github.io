import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import { BACKEND_ENV_VALIDATOR } from '@shared/constants/env-validation';
import { BACKEND_PUBLIC_DIR_PATH } from '@shared/constants/paths';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: BACKEND_ENV_VALIDATOR,
    }),
    ServeStaticModule.forRoot({
      rootPath: BACKEND_PUBLIC_DIR_PATH,
      serveRoot: '/',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
