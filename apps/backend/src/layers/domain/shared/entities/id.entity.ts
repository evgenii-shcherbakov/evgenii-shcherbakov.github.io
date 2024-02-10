import { Types } from 'mongoose';
import { InvalidIdException } from '@domain/shared/exceptions/invalid-id.exception';

export class IdEntity<Entity = any> {
  private readonly id: Types.ObjectId;
  private readonly entity?: Entity;

  constructor(id: string = null, entity?: Entity) {
    if (id) {
      if (!IdEntity.isValid(id)) {
        throw new InvalidIdException(id);
      }

      this.id = new Types.ObjectId(id);
    } else {
      this.id = new Types.ObjectId();
    }

    if (entity) {
      this.entity = entity;
    }
  }

  static isValid<E = any>(id: string | IdEntity<E> = null): boolean {
    return id && Types.ObjectId.isValid(id.toString());
  }

  static new<E = any>(): IdEntity<E> {
    return new IdEntity();
  }

  static from<Entity = any>(id: string = null, entity?: Entity): IdEntity<Entity> {
    return new this(id, entity);
  }

  toHex(): string {
    return this.id.toHexString();
  }

  toObjectId(): Types.ObjectId {
    return this.id;
  }

  toString(): string {
    return this.id.toString();
  }

  toEntity(): Entity | undefined {
    return this.entity;
  }
}
