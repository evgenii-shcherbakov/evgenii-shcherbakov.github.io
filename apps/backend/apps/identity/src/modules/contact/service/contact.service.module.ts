import { ContactPersistenceModule } from '@apps/identity/modules/contact/persistence/contact.perisistence.module';
import { CONTACT_SERVICE } from '@apps/identity/modules/contact/service/contact.service';
import { ContactServiceImpl } from '@apps/identity/modules/contact/service/impl/contact.service.impl';
import { Module } from '@nestjs/common';

@Module({
  imports: [ContactPersistenceModule],
  providers: [
    {
      provide: CONTACT_SERVICE,
      useClass: ContactServiceImpl,
    },
  ],
  exports: [CONTACT_SERVICE],
})
export class ContactServiceModule {}
