import { Module } from '@nestjs/common';
import { GrpcModule, GrpcServiceEnum } from '@packages/backend.transport';
import { CONTACT_SERVICE_CLIENT } from 'modules/contact/contact.constants';
import { ContactWebController } from 'modules/contact/web/contact.web.controller';

@Module({
  imports: [
    GrpcModule.register({
      clients: [
        {
          name: CONTACT_SERVICE_CLIENT,
          service: GrpcServiceEnum.IDENTITY_CONTACT,
        },
      ],
    }),
  ],
  controllers: [ContactWebController],
})
export class ContactWebModule {}
