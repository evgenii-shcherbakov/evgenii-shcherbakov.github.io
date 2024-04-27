import {
  CONTACT_REPOSITORY,
  ContactRepository,
} from '@apps/identity/modules/contact/persistence/contact.repository';
import { ContactService } from '@apps/identity/modules/contact/service/contact.service';
import { Contact } from '@libs/common';
import { Inject } from '@nestjs/common';

export class ContactServiceImpl implements ContactService {
  constructor(@Inject(CONTACT_REPOSITORY) private readonly contactRepository: ContactRepository) {}

  async getAllPrimary(): Promise<Contact[]> {
    return this.contactRepository.getMany({ isPrimary: true });
  }
}
