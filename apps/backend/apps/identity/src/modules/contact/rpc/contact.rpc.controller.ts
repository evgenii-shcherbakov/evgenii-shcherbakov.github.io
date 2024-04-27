import {
  CONTACT_SERVICE,
  ContactService,
} from '@apps/identity/modules/contact/service/contact.service';
import { Controller, Inject } from '@nestjs/common';
import {
  ContactServiceController,
  ContactServiceControllerMethods,
  RpcContactList,
} from '@proto/identity';

@Controller()
@ContactServiceControllerMethods()
export class ContactRpcController implements ContactServiceController {
  constructor(@Inject(CONTACT_SERVICE) private readonly contactService: ContactService) {}

  async getAll(): Promise<RpcContactList> {
    return {
      items: await this.contactService.getAllPrimary(),
    };
  }
}
