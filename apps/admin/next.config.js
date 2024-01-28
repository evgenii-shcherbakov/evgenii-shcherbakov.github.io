const { resolve } = require('path');
const { withPayload } = require('@payloadcms/next-payload');
const withPlugins = require('next-compose-plugins');
const packageJSON = require('./package.json');
const transpiledPackages = Object.keys(packageJSON.dependencies).filter((it) =>
  it.includes('@shared/'),
);
const withTM = require('next-transpile-modules')(transpiledPackages);

// const externalModules = [
//   '@shared/auth',
//   '@shared/core',
//   '@shared/environment',
//   '../../packages/auth',
//   '../../packages/core',
//   '../../packages/environment',
// ];

// const withTM = require('next-transpile-modules')(externalModules);

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: transpiledPackages,
  experimental: {
    esmExternals: 'loose',
  },
};

const payloadConfig = {
  configPath: resolve(__dirname, './src/payload/configs/payload.config.ts'),
  payloadPath: resolve(__dirname, './src/payload/index.ts'),
  adminRoute: '/admin',
};

module.exports = withPayload(nextConfig, payloadConfig);

// module.exports = withPlugins([withTM, withPayload(nextConfig, payloadConfig)]);

// withTM(withPayload(nextConfig, payloadConfig));
