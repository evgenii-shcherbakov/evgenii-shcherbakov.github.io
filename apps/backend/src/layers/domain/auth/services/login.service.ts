import { Either } from '@sweet-monads/either';
import { UnauthorizedException } from '@nestjs/common';
import { UserEntity } from '@domain/user/entities/user.entity';
import { EntityNotFoundException } from '@domain/shared/exceptions/entity-not-found.exception';

export const LOGIN_SERVICE = Symbol('LoginService');

export interface LoginService {
  login(
    email: string,
    password: string,
  ): Promise<Either<UnauthorizedException | EntityNotFoundException, UserEntity>>;
}
