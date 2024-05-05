import { Contact } from '@packages/backend.common';
import { RpcContactQuery } from '@packages/backend.transport/generated/identity';

export const CONTACT_SERVICE = Symbol('ContactService');

export interface ContactService {
  getMany(query?: RpcContactQuery): Promise<Contact[]>;
}
