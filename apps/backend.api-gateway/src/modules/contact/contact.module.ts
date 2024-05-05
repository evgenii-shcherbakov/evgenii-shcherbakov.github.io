import { Module } from '@nestjs/common';
import { ContactWebModule } from 'modules/contact/web/contact.web.module';

@Module({
  imports: [ContactWebModule],
})
export class ContactModule {}
