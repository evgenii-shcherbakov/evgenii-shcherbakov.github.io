import { ContactModule } from '@apps/identity/modules/contact/contact.module';
import { CommonModule } from '@libs/common';
import { Module } from '@nestjs/common';

@Module({
  imports: [CommonModule, ContactModule],
})
export class IdentityModule {}
