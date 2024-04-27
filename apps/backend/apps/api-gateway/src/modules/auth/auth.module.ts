import { AuthWebModule } from '@apps/api-gateway/modules/auth/web/auth.web.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [AuthWebModule],
})
export class AuthModule {}
