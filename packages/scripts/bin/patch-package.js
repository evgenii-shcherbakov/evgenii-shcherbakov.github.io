const { writeFile } = require('fs/promises');
const { join, resolve } = require('path');

const saveJson = async (path, obj) => {
  await writeFile(path, JSON.stringify(obj, null, 2), { encoding: 'utf-8' });
};

(async () => {
  const name = process.argv[2] ?? '';
  const root = resolve(__dirname, '../..', name);
  console.log(`Patching package @shared/${name} placed at ${root}...`);
  await saveJson(join(root, 'dist/esm/package.json'), { type: 'module' });
  await saveJson(join(root, 'dist/cjs/package.json'), { type: 'commonjs' });
  console.log(`Patching package @shared/${name} completed`);
})();
