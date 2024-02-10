// import { Inject, Injectable } from '@nestjs/common';
// import { USER_REPOSITORY, UserRepository } from '@domain/user/repositories/user.repository';
// import { GetManyQueryDto } from '@infrastructure/api/cryptography/dto/query/get-many.query.dto';
// import { ApiUserMapper } from '@infrastructure/api/cryptography/mappers/api.user.mapper';
//
// @Injectable()
// export class ApiUserService {
//   constructor(
//     @Inject(USER_REPOSITORY) private readonly userRepository: UserRepository,
//     private readonly mapper: ApiUserMapper,
//   ) {}
//
//   async getMany({ filter, ...query }: GetManyQueryDto) {
//     const transformedFilter = this.mapper.toEntity(filter);
//     const entities = await this.userRepository.getMany(transformedFilter, query);
//     const amount = await this.userRepository.count(transformedFilter);
//
//     return {
//       data: this.mapper.toListResponse(entities),
//       total: amount,
//     };
//   }
// }
