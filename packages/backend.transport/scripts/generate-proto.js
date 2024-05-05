const { readdir } = require('node:fs/promises');
const { resolve, join } = require('node:path');
const { execSync } = require('node:child_process');

const PROTOC_PATH = process.env.PROTOC_PATH ?? 'protoc';

(async () => {
  const libraryRoot = resolve(__dirname, '..');
  const protoDir = resolve(libraryRoot, 'src/proto');
  const files = await readdir(protoDir, { recursive: true });

  files.forEach((file) => {
    if (/.proto$/g.test(file)) {
      execSync(
        [
          PROTOC_PATH,
          `--plugin=${join(libraryRoot, '../../node_modules/.bin/protoc-gen-ts_proto')}`,
          `--ts_proto_out=../generated`,
          '--ts_proto_opt=nestJs=true',
          '--ts_proto_opt=useDate=true',
          // '--ts_proto_opt=useOptionals=none',
          // '--ts_proto_opt=useMongoObjectId=true',
          '--ts_proto_opt=snakeToCamel=false',
          `./${file}`,
        ].join(' '),
        { cwd: protoDir, encoding: 'utf8' },
      );
    }
  });
})();
