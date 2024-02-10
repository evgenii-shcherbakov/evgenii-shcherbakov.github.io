import { Inject, Module, OnModuleInit } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { USER, UserSchema } from '@infrastructure/persistence/user/schemas/user.schema';
import { USER_REPOSITORY, UserRepository } from '@domain/user/repositories/user.repository';
import { UserRepositoryImpl } from '@infrastructure/persistence/user/repositories/user.repository.impl';
import { UserEntity } from '@domain/user/entities/user.entity';
import { IdEntity } from '@domain/shared/entities/id.entity';
import {
  CRYPTOGRAPHY_SERVICE,
  CryptographyService,
} from '@domain/cryptography/services/cryptography.service';
import { CryptographyModule } from '@application/cryptography/cryptography.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: USER, schema: UserSchema }]), CryptographyModule],
  providers: [
    {
      provide: USER_REPOSITORY,
      useClass: UserRepositoryImpl,
    },
  ],
  exports: [USER_REPOSITORY],
})
export class PersistenceUserModule implements OnModuleInit {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: UserRepository,
    @Inject(CRYPTOGRAPHY_SERVICE) private readonly cryptographyService: CryptographyService,
  ) {}

  async onModuleInit() {
    // const user = new UserEntity(
    //   IdEntity.new(),
    //   'admin@gmail.com',
    //   await this.cryptographyService.hash('Zhenek228!'),
    // );
    //
    // await this.userRepository.saveOne(user);
    // const users = await this.userRepository.getAll();
    // console.log(users);
  }
}
