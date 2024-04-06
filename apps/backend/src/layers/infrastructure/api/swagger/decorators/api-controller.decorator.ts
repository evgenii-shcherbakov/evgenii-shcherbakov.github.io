import { applyDecorators, Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

export const ApiController = (...tags: string[]) => {
  return applyDecorators(ApiTags(...tags), Controller(tags));
};
