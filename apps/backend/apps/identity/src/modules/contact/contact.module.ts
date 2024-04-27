import { ContactRpcModule } from '@apps/identity/modules/contact/rpc/contact.rpc.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [ContactRpcModule],
})
export class ContactModule {}
