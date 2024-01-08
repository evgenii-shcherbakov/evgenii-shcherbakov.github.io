const { join, relative, resolve } = require('node:path');
const { writeFile } = require('node:fs/promises');
const baseConfig = require('./configs/tsconfig.json');

const PATH_CONFIG_NAME = 'tsconfig.paths.json';
const PROJECT_ROOT = resolve(__dirname, '../..');
const DESTINATIONS = ['./admin', './backend', './frontend', './shared'];

const transformAlias = (aliasPaths, targetDestination, suffix = '') => {
  return aliasPaths.map((aliasPath) => {
    const path = relative(targetDestination, aliasPath);
    return suffix ? join(path, suffix) : path;
  });
};

const generateRelativePaths = (target) => {
  const aliasObject = baseConfig.compilerOptions.paths;

  return Object.keys(aliasObject).reduce((acc, alias) => {
    const aliasPaths = aliasObject[alias];
    const transformedPaths = transformAlias(aliasPaths, target);

    if (!alias.startsWith('@')) {
      // not custom alias
      acc[alias] = transformedPaths;
      return acc;
    }

    // custom alias
    const spreadAlias = join(alias, '*');
    acc[alias] = transformedPaths;
    acc[spreadAlias] = transformAlias(aliasPaths, target, '*');
    return acc;
  }, {});
};

(async () => {
  for (const destination of DESTINATIONS) {
    const config = JSON.parse(JSON.stringify(baseConfig));
    config.compilerOptions.paths = generateRelativePaths(destination);

    await writeFile(
      join(PROJECT_ROOT, destination, PATH_CONFIG_NAME),
      JSON.stringify(config, null, 2),
      { encoding: 'utf-8' },
    );
  }
})();
