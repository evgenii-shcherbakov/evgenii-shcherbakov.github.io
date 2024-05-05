import Joi from 'joi';
import {
  BackendCvTransportSchema,
  BackendIdentityTransportSchema,
  BackendTransportSchema,
} from 'schemas/backend-transport.schema';
import { CommonSchema } from './common.schema';

export const BackendCommonSchema = {
  ...CommonSchema,
  FIRST_LOCAL_GRPC_PORT: Joi.alternatives<string | number>(Joi.string(), Joi.number()).optional(),
};

export const BackendMicroserviceSchema = {
  ...BackendCommonSchema,
  DATABASE_URL: Joi.string().required(),
};

export const BackendApiGatewaySchema = {
  ...BackendCommonSchema,
  ...BackendTransportSchema,
};

export const BackendIdentitySchema = {
  ...BackendMicroserviceSchema,
  ...BackendIdentityTransportSchema,
};

export const BackendCvSchema = {
  ...BackendMicroserviceSchema,
  ...BackendCvTransportSchema,
};
