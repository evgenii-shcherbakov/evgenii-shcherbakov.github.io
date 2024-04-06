const { join } = require('node:path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  sassOptions: {
    includePaths: [join(__dirname, 'src')],
  },
  transpilePackages: ['@packages/common', '@packages/environment'],
};

module.exports = nextConfig;
