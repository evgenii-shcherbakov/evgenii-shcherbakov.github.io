const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  sassOptions: {
    includePaths: [path.join(__dirname, 'src')],
  },
  distDir: 'dist',
  images: { unoptimized: true },
};
