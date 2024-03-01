import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { HttpHeadersEnum } from '@packages/common';
// import { ConfigService } from '@nestjs/config';
// import { BackendEnvironment } from '@packages/environment';

// type StaticOrigin = boolean | string | RegExp | (string | RegExp)[];
//
// const originMatcherFactory = (allowedOrigins: string[]): CorsOptions['origin'] => {
//   return (
//     origin: string | undefined,
//     callback: (error: Error | null, origin?: StaticOrigin) => void,
//   ) => {
//     if (origin === undefined) {
//       return callback(null, true);
//     }
//
//     if (
//       !origin ||
//       allowedOrigins.every((allowedOrigin: string) => !origin.startsWith(allowedOrigin))
//     ) {
//       return callback(new Error(`Request from origin '${origin}' is not allowed by CORS`));
//     }
//
//     callback(null, true);
//   };
// };
//
// export const corsOptionsFactory = (
//   configService: ConfigService<BackendEnvironment>,
// ): CorsOptions => {
//   const isProduction = configService.get('NODE_ENV') === 'production';
//
//   const allowedOrigins: string[] = isProduction
//     ? [configService.get('ADMIN_URL'), configService.get('FRONTEND_URL')]
//     : ['http://localhost'];
//
//   return {
//     origin: originMatcherFactory(allowedOrigins),
//     credentials: true,
//     allowedHeaders: [HttpHeadersEnum.AUTHORIZATION],
//   };
// };

export const corsOptions: CorsOptions = {
  origin: '*',
  credentials: true,
  allowedHeaders: [HttpHeadersEnum.AUTHORIZATION, HttpHeadersEnum.CONTENT_TYPE],
};
