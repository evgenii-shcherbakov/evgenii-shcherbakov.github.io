// import { resolve } from 'path';
// import { buildConfig } from 'payload/config';
// import { mongooseAdapter } from '@payloadcms/db-mongodb';
// import { slateEditor } from '@payloadcms/richtext-slate';
// import { webpackBundler } from '@payloadcms/bundler-webpack';
//
// export default buildConfig({
//   db: mongooseAdapter({
//     url: process.env.MONGODB_URI as string,
//   }),
//   editor: slateEditor({}),
//   admin: {
//     bundler: webpackBundler(),
//   },
//   collections: [
//     // Your collections here
//   ],
//   globals: [
//     // Your globals here
//   ],
//   typescript: {
//     outputFile: resolve(__dirname, '../payload-types.ts'),
//   },
// });

import dynamic from 'next/dynamic';
import { resolve, relative } from 'path';

import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { webpackBundler } from '@payloadcms/bundler-webpack';
import { slateEditor } from '@payloadcms/richtext-slate';
import { buildConfig } from 'payload/config';
// import dotenv from 'dotenv';
// import { ADMIN_ENV_FILE_PATH } from '@shared/constants/paths';
import { DATABASE_URL } from '@admin/constants/environment';
import pathsConfig from '../../../tsconfig.paths.json';
import { UserCollection } from '@admin/payload/collections/user.collection';

// dotenv.config({ path: ADMIN_ENV_FILE_PATH });

type TSPathsObject = Record<string, string[]>;

const payloadConfig = buildConfig(
  {
    admin: {
      user: UserCollection.slug,
      bundler: webpackBundler(),
      webpack: (config) => {
        const aliasObject: TSPathsObject = pathsConfig.compilerOptions.paths;

        config.resolve = {
          ...(config.resolve ?? {}),
          alias: {
            ...(config.resolve?.alias ?? {}),
            ...Object.keys(aliasObject).reduce((acc: TSPathsObject, alias: string) => {
              acc[alias] = aliasObject[alias].map((path: string) => {
                return relative('src/payload/configs', path);
              });
              return acc;
            }, {}),
          },
        };

        return config;
      },
    },
    editor: slateEditor({}),
    collections: [UserCollection],
    typescript: {
      outputFile: resolve(__dirname, '../types/payload-types.ts'),
    },
    graphQL: {
      schemaOutputFile: resolve(__dirname, '../graphql/generated-schema.graphql'),
    },
    db: mongooseAdapter({
      url: DATABASE_URL,
    }),
  }
  // config as any
);

export default payloadConfig;
