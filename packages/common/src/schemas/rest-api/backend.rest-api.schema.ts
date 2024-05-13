import { HttpMethodEnum } from 'features/http';
import { SchemaEndpointDefinition } from 'features/rest-api';
import {
  BackendContact,
  BackendCv,
  BackendExperience,
  BackendIdentity,
  BackendJob,
  BackendProject,
} from 'models';

export type BackendRestApiSchema = {
  identity: {
    [HttpMethodEnum.GET]: SchemaEndpointDefinition<never, BackendIdentity>;
    contacts: {
      [HttpMethodEnum.GET]: SchemaEndpointDefinition<never, BackendContact[]>;
    };
    experience: {
      [HttpMethodEnum.GET]: SchemaEndpointDefinition<never, BackendExperience[]>;
    };
    jobs: {
      [HttpMethodEnum.GET]: SchemaEndpointDefinition<never, BackendJob[]>;
    };
    projects: {
      [HttpMethodEnum.GET]: SchemaEndpointDefinition<never, BackendProject[]>;
    };
  };
  cv: {
    [HttpMethodEnum.GET]: SchemaEndpointDefinition<never, BackendCv>;
    ':alias': {
      [HttpMethodEnum.GET]: SchemaEndpointDefinition<never, BackendCv>;
    };
  };
};
