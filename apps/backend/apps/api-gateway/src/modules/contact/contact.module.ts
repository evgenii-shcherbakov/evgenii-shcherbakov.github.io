import { ContactWebModule } from '@apps/api-gateway/modules/contact/web/contact.web.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [ContactWebModule],
})
export class ContactModule {}
