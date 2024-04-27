import { AuthModule } from '@apps/api-gateway/modules/auth/auth.module';
import { ContactModule } from '@apps/api-gateway/modules/contact/contact.module';
import { CommonModule } from '@libs/common';
import { Module } from '@nestjs/common';

@Module({
  imports: [CommonModule, AuthModule, ContactModule],
})
export class ApiGatewayModule {}
