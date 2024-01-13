import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BACKEND_ENV_VALIDATOR } from '@shared/constants/env-validation';

//

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: BACKEND_ENV_VALIDATOR,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
