import { HttpMethodEnum } from '../../../../features/http';
import type { BackendAuthRequestDto } from '../dto/request/backend.auth.request.dto';
import type { BackendAuthResponseDto } from '../dto/response/backend.auth.response.dto';
import type { BackendAuthUserIdentityResponseDto } from '../dto/response/backend.auth-user-identity.response.dto';

export type BackendAuthRestApiSchema = {
  auth: {
    me: {
      [HttpMethodEnum.GET]: {
        response: BackendAuthUserIdentityResponseDto;
      };
    };
    'refresh-token': {
      [HttpMethodEnum.POST]: {
        response: BackendAuthResponseDto;
      };
    };
    register: {
      [HttpMethodEnum.POST]: {
        request: BackendAuthRequestDto;
        response: BackendAuthResponseDto;
      };
    };
    login: {
      [HttpMethodEnum.POST]: {
        request: BackendAuthRequestDto;
        response: BackendAuthResponseDto;
      };
    };
  };
};
