import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepositoryImpl } from '@infrastructure/persistence/shared/repositories/base.repository.impl';
import { UserEntity } from '@domain/user/entities/user.entity';
import { USER, UserDocument } from '@infrastructure/persistence/user/schemas/user.schema';
import { UserMapper } from '@infrastructure/persistence/user/mappers/user.mapper';
import { UserRepository } from '@domain/user/repositories/user.repository';

export class UserRepositoryImpl
  extends BaseRepositoryImpl<UserEntity, UserDocument, UserMapper>
  implements UserRepository
{
  constructor(@InjectModel(USER) userModel: Model<UserDocument>) {
    super(userModel, new UserMapper());
  }
}
