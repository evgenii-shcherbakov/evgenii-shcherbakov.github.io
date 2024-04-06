import { BackendExperience } from 'domains/backend/experience';
import { HttpMethodEnum } from 'features/http';
import { SchemaEndpointDefinition } from 'features/rest-api';
import {
  BackendAuthRequest,
  BackendAuthResponse,
  BackendAuthUserIdentityResponse,
} from 'domains/backend/auth';
import { BackendContact } from 'domains/backend/contact';
import { BackendIdentity } from 'domains/backend/identity';

export type BackendRestApiSchema = {
  auth: {
    me: {
      [HttpMethodEnum.GET]: SchemaEndpointDefinition<never, BackendAuthUserIdentityResponse>;
    };
    'refresh-token': {
      [HttpMethodEnum.POST]: SchemaEndpointDefinition<never, BackendAuthResponse>;
    };
    register: {
      [HttpMethodEnum.POST]: SchemaEndpointDefinition<BackendAuthRequest, BackendAuthResponse>;
    };
    login: {
      [HttpMethodEnum.POST]: SchemaEndpointDefinition<BackendAuthRequest, BackendAuthResponse>;
    };
  };
  contacts: {
    [HttpMethodEnum.GET]: SchemaEndpointDefinition<never, BackendContact[]>;
  };
  experience: {
    [HttpMethodEnum.GET]: SchemaEndpointDefinition<never, BackendExperience[]>;
  };
  identity: {
    [HttpMethodEnum.GET]: SchemaEndpointDefinition<never, BackendIdentity>;
  };
};
