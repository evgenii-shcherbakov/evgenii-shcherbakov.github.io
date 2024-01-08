// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { join } from 'path';
import {
  WebpackConfig,
  webpackDevConfig,
  WebpackParams,
  webpackProdConfig,
} from 'rxspa/dist/webpack';
import { merge } from 'webpack-merge';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { DefinePlugin } from 'webpack';
import { config } from 'dotenv';

config();

const isProduction = process.env.NODE_ENV === 'production';

const assetsFileName = isProduction ? 'assets/[name].[contenthash].[ext]' : 'assets/[name].[ext]';

const iconsPath: string = join(__dirname, 'src', 'assets', 'icons');

const webpackParams: WebpackParams = {
  entry: join(__dirname, 'src', 'main.ts'),
  output: join(__dirname, 'dist'),
  htmlEntry: join(__dirname, 'public', 'index.html'),
  favicon: join(__dirname, 'public', 'favicon.ico'),
  watchFiles: [join(__dirname, 'src')],
};

const webpackConfig: WebpackConfig = (isProduction ? webpackProdConfig : webpackDevConfig)(
  webpackParams,
);

if (webpackConfig.module?.rules) {
  webpackConfig.module.rules = webpackConfig.module.rules.filter((rule) => {
    if (typeof rule !== 'object') return true;

    return !(
      rule.use !== null &&
      typeof rule.use === 'object' &&
      Array.isArray(rule.use) &&
      rule.use.some((loader) => loader === MiniCssExtractPlugin.loader)
    );
  });
}

export default merge(webpackConfig, {
  output: {
    assetModuleFilename: assetsFileName,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: iconsPath, to: 'assets/icons', force: true }],
    }),
    new DefinePlugin({
      env: {
        PORT: JSON.stringify(process.env.PORT),
        BASE_URL: JSON.stringify(process.env.BASE_URL),
        TELEGRAM_API_TOKEN: JSON.stringify(process.env.TELEGRAM_API_TOKEN),
        TELEGRAM_AUTHOR_ID: JSON.stringify(process.env.TELEGRAM_AUTHOR_ID),
        TELEGRAM_AUTHOR_NICKNAME: JSON.stringify(process.env.TELEGRAM_AUTHOR_NICKNAME),
      },
    }),
  ],
});
