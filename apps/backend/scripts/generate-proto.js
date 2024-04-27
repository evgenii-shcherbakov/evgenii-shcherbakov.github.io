const { readdir, readFile } = require('node:fs/promises');
const { resolve, join } = require('node:path');
const { execSync } = require('node:child_process');

const PROTOC_PATH = process.env.PROTOC_PATH ?? 'protoc';

(async () => {
  const backendRoot = resolve(__dirname, '..');
  const protoDir = resolve(backendRoot, 'libs/grpc/src/proto');
  const files = await readdir(protoDir, { recursive: true });
  const cache = new Map();

  for (const file of files) {
    if (/.proto$/g.test(file)) {
      try {
        const filePath = join(protoDir, file);
        const content = await readFile(filePath, { encoding: 'utf8' });
        cache.set(file, content);
      } catch (e) {
        console.error(e);
      }
    }
  }

  for (const fileName of cache.keys()) {
    execSync(
      [
        PROTOC_PATH,
        `--plugin=${join(backendRoot, '../../node_modules/.bin/protoc-gen-ts_proto')}`,
        `--ts_proto_out=../generated`,
        '--ts_proto_opt=nestJs=true',
        `./${fileName}`,
      ].join(' '),
      { cwd: protoDir, encoding: 'utf8' },
    );
  }
})();
