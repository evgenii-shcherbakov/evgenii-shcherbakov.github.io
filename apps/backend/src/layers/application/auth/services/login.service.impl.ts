import { LoginService } from '@domain/auth/services/login.service';
import { Either, left } from '@sweet-monads/either';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserEntity } from '@domain/user/entities/user.entity';
import { USER_REPOSITORY, UserRepository } from '@domain/user/repositories/user.repository';
import {
  CRYPTOGRAPHY_SERVICE,
  CryptographyService,
} from '@domain/cryptography/services/cryptography.service';
import { EntityNotFoundException } from '@domain/shared/exceptions/entity-not-found.exception';

@Injectable()
export class LoginServiceImpl implements LoginService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: UserRepository,
    @Inject(CRYPTOGRAPHY_SERVICE) private readonly cryptographyService: CryptographyService,
  ) {}

  async login(
    email: string,
    password: string,
  ): Promise<Either<UnauthorizedException | EntityNotFoundException, UserEntity>> {
    const ioUser = await this.userRepository.getOne({ email });

    if (ioUser.isLeft()) {
      return ioUser;
    }

    const isPasswordCorrect = await this.cryptographyService.compare(
      password,
      ioUser.value.password,
    );

    if (!isPasswordCorrect) {
      return left(new UnauthorizedException('Invalid password'));
    }

    return ioUser;
  }
}
