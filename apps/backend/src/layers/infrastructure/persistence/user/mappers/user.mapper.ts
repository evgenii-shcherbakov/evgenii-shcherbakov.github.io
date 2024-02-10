import { BaseMapper } from '@infrastructure/persistence/shared/mappers/base.mapper';
import { UserEntity } from '@domain/user/entities/user.entity';
import { UserDocument } from '@infrastructure/persistence/user/schemas/user.schema';
import { IdEntity } from '@domain/shared/entities/id.entity';

export class UserMapper extends BaseMapper<UserEntity, UserDocument> {
  toEntity(document: UserDocument): UserEntity {
    return new UserEntity(new IdEntity(document._id), document.email, document.password);
  }

  toDocument(entity: Partial<UserEntity>): Partial<UserDocument> {
    return { _id: entity.id?.toString(), email: entity.email, password: entity.password };
  }
}
