import { RestApiClient, VercelRestApiSchema } from '@packages/common';

export const API_SERVICE = Symbol('ApiService');

export interface ApiService extends RestApiClient<VercelRestApiSchema> {}
