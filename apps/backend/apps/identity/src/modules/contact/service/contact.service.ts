import { Contact } from '@libs/common';

export const CONTACT_SERVICE = Symbol('ContactService');

export interface ContactService {
  getAllPrimary(): Promise<Contact[]>;
}
