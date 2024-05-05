import { Controller, Inject } from '@nestjs/common';
import {
  ContactServiceController,
  ContactServiceControllerMethods,
  RpcContactList,
  RpcContactRequest,
} from '@packages/backend.transport/generated/identity';
import { CONTACT_SERVICE, ContactService } from 'modules/contact/service/contact.service';

@Controller()
@ContactServiceControllerMethods()
export class ContactRpcController implements ContactServiceController {
  constructor(@Inject(CONTACT_SERVICE) private readonly contactService: ContactService) {}

  async getMany(request: RpcContactRequest): Promise<RpcContactList> {
    return {
      items: await this.contactService.getMany(request.query),
    };
  }
}
