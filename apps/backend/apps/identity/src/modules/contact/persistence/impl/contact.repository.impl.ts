import { ContactRepository } from '@apps/identity/modules/contact/persistence/contact.repository';
import { CONTACT, Contact, ContactEntity, MongoMapper, MongoRepositoryImpl } from '@libs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

export class ContactRepositoryImpl
  extends MongoRepositoryImpl<ContactEntity, Contact>
  implements ContactRepository
{
  constructor(@InjectModel(CONTACT) protected readonly model: Model<ContactEntity>) {
    super(model, new MongoMapper());
  }
}
