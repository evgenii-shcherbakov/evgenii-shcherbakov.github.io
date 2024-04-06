export * from './enums';
export * from './interfaces';

// import { HttpMethodEnum } from 'features/http';
// import { SchemaEndpointDefinition } from 'features/rest-api';
// import { VercelGetDeploymentsResponse } from './interfaces/vercel.get-deployments-response';
// import { VercelGetProjectDomainsResponse } from './interfaces/vercel.get-project-domains-response';
// import { VercelCreateEnvVariableRequest } from './interfaces/vercel.create-env-variable-request';
// import { VercelCreateEnvVariableResponse } from './interfaces/vercel.create-env-variable-response';
//
// export * from './enums/vercel.deployment-target.enum';
// export * from './enums/vercel.env-variable-type.enum';
// export * from './interfaces/vercel.create-env-variable-request';
// export * from './interfaces/vercel.create-env-variable-response';
// export * from './interfaces/vercel.get-deployments-response';
// export * from './interfaces/vercel.get-project-domains-response';
// export * from './interfaces/vercel.pagination-response';
//
// export type VercelRestApiSchema = {
//   v6: {
//     deployments: {
//       [HttpMethodEnum.GET]: SchemaEndpointDefinition<never, VercelGetDeploymentsResponse>;
//     };
//   };
//   v9: {
//     projects: {
//       ':projectId': {
//         domains: {
//           [HttpMethodEnum.GET]: SchemaEndpointDefinition<never, VercelGetProjectDomainsResponse>;
//         };
//       };
//     };
//   };
//   v10: {
//     projects: {
//       ':projectId': {
//         env: {
//           [HttpMethodEnum.POST]: SchemaEndpointDefinition<
//             VercelCreateEnvVariableRequest,
//             VercelCreateEnvVariableResponse
//           >;
//         };
//       };
//     };
//   };
// };
