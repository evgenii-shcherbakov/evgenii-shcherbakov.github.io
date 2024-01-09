const { resolve } = require('path');
const { withPayload } = require('@payloadcms/next-payload');

/** @type {import('next').NextConfig} */
const nextConfig = {};

const payloadConfig = {
  configPath: resolve(__dirname, './src/payload/configs/payload.config.ts'),
  payloadPath: resolve(__dirname, './src/payload/index.ts'),
  adminRoute: '/admin',
};

module.exports = withPayload(nextConfig, payloadConfig);
