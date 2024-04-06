import { HttpMethodEnum } from 'features/http';
import { SchemaEndpointDefinition } from 'features/rest-api';
import { AdminHash } from 'domains/admin/hash';

export type AdminRestApiSchema = {
  api: {
    hash: {
      [HttpMethodEnum.POST]: SchemaEndpointDefinition<AdminHash, AdminHash>;
    };
  };
};
