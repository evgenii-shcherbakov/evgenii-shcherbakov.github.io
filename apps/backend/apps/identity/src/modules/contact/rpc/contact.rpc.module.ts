import { ContactRpcController } from '@apps/identity/modules/contact/rpc/contact.rpc.controller';
import { ContactServiceModule } from '@apps/identity/modules/contact/service/contact.service.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [ContactServiceModule],
  controllers: [ContactRpcController],
})
export class ContactRpcModule {}
