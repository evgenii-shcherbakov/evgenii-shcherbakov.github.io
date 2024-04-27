import { CONTACT_SERVICE_CLIENT } from '@apps/api-gateway/modules/contact/contact.constants';
import { ContactWebController } from '@apps/api-gateway/modules/contact/web/contact.web.controller';
import { GrpcModule, GrpcServiceEnum } from '@libs/grpc';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    GrpcModule.register({
      clients: [{ name: CONTACT_SERVICE_CLIENT, service: GrpcServiceEnum.IDENTITY_CONTACT }],
    }),
  ],
  controllers: [ContactWebController],
})
export class ContactWebModule {}
