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
//   auth: new TypedHttpController('auth')
//     .endpoint(TypedHttpEndpoint.post('refresh').request<boolean>().response<bigint>())
//     .endpoint(TypedHttpEndpoint.post('users/:userId/comments').response<string[]>()),
// };
//
// const client = new TypedHttpClient(schema, '');
//
// const result = schema.auth.endpoints.postAuthRefresh.getUrl();
// const result2 = schema.auth.endpoints.postAuthUsersUserIdComments.getUrl();
//
// const result3 = schema.auth.getUrl();
// const result4 = schema.auth.endpoints.postAuthRefresh;
//
// const response = await client.typed.auth.post('auth/refresh', { body: true });
// const response2 = await client.typed.auth.post('auth/users/:userId/comments', {
//   params: { userId: 1 },
// });
