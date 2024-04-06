import { Identifier, RaRecord } from 'react-admin';

export abstract class DatabaseEntity<Id extends Identifier = any> implements RaRecord<Id> {
  abstract readonly id: Id;
}
