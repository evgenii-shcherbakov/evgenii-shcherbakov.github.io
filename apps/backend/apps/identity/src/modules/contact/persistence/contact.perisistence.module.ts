import { CONTACT_REPOSITORY } from '@apps/identity/modules/contact/persistence/contact.repository';
import { ContactRepositoryImpl } from '@apps/identity/modules/contact/persistence/impl/contact.repository.impl';
import { CONTACT, ContactSchema } from '@libs/common';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: CONTACT, schema: ContactSchema }])],
  providers: [
    {
      provide: CONTACT_REPOSITORY,
      useClass: ContactRepositoryImpl,
    },
  ],
  exports: [CONTACT_REPOSITORY],
})
export class ContactPersistenceModule {}
