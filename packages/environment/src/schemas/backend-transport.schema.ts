import Joi from 'joi';

export const BackendIdentityTransportSchema = {
  IDENTITY_GRPC_URL: Joi.string().optional(),
};

export const BackendCvTransportSchema = {
  CV_GRPC_URL: Joi.string().optional(),
};

export const BackendTransportSchema = {
  ...BackendIdentityTransportSchema,
  // ...BackendCvTransportSchema,
};
