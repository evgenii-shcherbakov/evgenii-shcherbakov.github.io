export * from './clients';
export * from './entities';
export * from './enums';
export * from './interfaces';
export * from './types';

// import { TypedHttpClient } from 'clients';
// import { TypedHttpController, TypedHttpEndpoint } from 'entities';
// import { TypedHttpAction } from 'enums';
//
// const schema = {
//   auth: new TypedHttpController('auth').declareEndpoints({
//     refresh: TypedHttpEndpoint.post('refresh').request<boolean>().response<bigint>(),
//     createComment: TypedHttpEndpoint.post('users/:userId/comment')
//       .request<boolean>()
//       .response<bigint>(),
//   }),
// };
//
// const client = new TypedHttpClient(schema, '');
//
// const result = schema.auth.endpoints.refresh.getUrl();
// const result2 = schema.auth.endpoints.createComment.getUrl();
//
// const result3 = schema.auth.getUrl();
// // const result4 = schema.auth.endpoints.postAuthRefresh;
//
// const response = await client.typed.auth.refresh({ body: true });
// const response2 = await client.typed.auth.createComment({
//   params: { userId: 1 },
//   body: true,
// });
//
// client.typed.auth.refresh({ body: {} });
