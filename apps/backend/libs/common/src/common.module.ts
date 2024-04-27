import { DatabaseModule } from '@libs/common/modules/database';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { backendEnvValidator } from '@packages/environment';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: backendEnvValidator.toJoiValidator(),
    }),
    DatabaseModule,
  ],
})
export class CommonModule {}
