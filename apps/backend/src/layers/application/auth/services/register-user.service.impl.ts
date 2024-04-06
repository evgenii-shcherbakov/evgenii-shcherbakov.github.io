import { RegisterUserService } from '@domain/auth/services/register-user.service';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { Either, left } from '@sweet-monads/either';
import { USER_REPOSITORY, UserRepository } from '@domain/user/repositories/user.repository';
import {
  CRYPTOGRAPHY_SERVICE,
  CryptographyService,
} from '@domain/cryptography/services/cryptography.service';
import { DatabaseException } from '@domain/shared/exceptions/database.exception';
import { UserEntity } from '@domain/user/entities/user.entity';
import { IdEntity } from '@domain/shared/entities/id.entity';

@Injectable()
export class RegisterUserServiceImpl implements RegisterUserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: UserRepository,
    @Inject(CRYPTOGRAPHY_SERVICE)
    private readonly cryptographyService: CryptographyService,
  ) {}

  async register(
    email: string,
    password: string,
  ): Promise<Either<UnauthorizedException | DatabaseException, UserEntity>> {
    const isExistsWithEmail = await this.userRepository.isExists({ email });

    if (isExistsWithEmail) {
      return left(new UnauthorizedException('User with this email already exists'));
    }

    const hashedPassword = await this.cryptographyService.hash(password);
    return this.userRepository.saveOne(new UserEntity(IdEntity.new(), email, hashedPassword));
  }
}
