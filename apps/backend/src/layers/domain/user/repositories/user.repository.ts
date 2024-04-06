import { BaseRepository } from '@domain/shared/repositories/base.repository';
import { UserEntity } from '@domain/user/entities/user.entity';

export const USER_REPOSITORY = Symbol('UserRepository');

export interface UserRepository extends BaseRepository<UserEntity> {}
