import { HttpMethodEnum } from '../../../../features/http';
import type { AdminHashDto } from '../dto/admin.hash.dto';

export type AdminHashRestApiSchema = {
  hash: {
    [HttpMethodEnum.POST]: {
      request: AdminHashDto;
      response: AdminHashDto;
    };
  };
};
