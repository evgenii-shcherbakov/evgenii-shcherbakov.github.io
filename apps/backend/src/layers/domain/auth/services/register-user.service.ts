import { Either } from '@sweet-monads/either';
import { UnauthorizedException } from '@nestjs/common';
import { DatabaseException } from '@domain/shared/exceptions/database.exception';
import { UserEntity } from '@domain/user/entities/user.entity';

export const REGISTER_USER_SERVICE = Symbol('RegisterUserService');

export interface RegisterUserService {
  register(
    email: string,
    password: string,
  ): Promise<Either<UnauthorizedException | DatabaseException, UserEntity>>;
}
