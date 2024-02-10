// import { UserEntity } from '@domain/user/entities/user.entity';
// import { UserEntityResponseDto } from '@infrastructure/api/cryptography/dto/response/user-entity.response.dto';
// import { IdEntity } from '@domain/shared/entities/id.entity';

// export class ApiUserMapper {
//   toResponse(user: UserEntity): UserEntityResponseDto {
//     console.log(user);
//
//     return {
//       id: user.id.toString(),
//       email: user.email,
//       password: user.password,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     };
//   }
//
//   toListResponse(users: UserEntity[]): UserEntityResponseDto[] {
//     return users.map((user) => this.toResponse(user));
//   }
//
//   toEntity(filter: any): UserEntity {
//     return new UserEntity(IdEntity.from(filter.id), filter.email, filter.password);
//   }
// }
