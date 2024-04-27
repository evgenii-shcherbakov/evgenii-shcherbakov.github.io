import { Contact, DatabaseRepository } from '@libs/common';

export const CONTACT_REPOSITORY = Symbol('ContactRepository');

export interface ContactRepository extends DatabaseRepository<Contact> {}
