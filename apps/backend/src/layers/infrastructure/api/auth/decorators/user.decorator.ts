import {
  ExecutionContext,
  createParamDecorator,
  InternalServerErrorException,
} from '@nestjs/common';
import { UserEntity } from '@domain/user/entities/user.entity';

export const User = createParamDecorator((_, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  const user = request['user'];

  if (user && user instanceof UserEntity) {
    return user;
  }

  throw new InternalServerErrorException('User is missing');
});
