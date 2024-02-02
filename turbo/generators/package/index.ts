import { PlopTypes } from '@turbo/gen';
import { readFileSync } from 'fs';
import { join } from 'path';

type Props = {
  name: string;
  // outDir: string;
};

const transformJson = (
  templatePath: string,
  transform: (json: object) => object = (json) => json,
) => {
  const json = JSON.parse(readFileSync(templatePath, { encoding: 'utf-8' }));
  return JSON.stringify(transform(json), null, 2);
};

const baseJsonTransformer = (template: string, _data: Props, _cfg: PlopTypes.AddActionConfig) => {
  return transformJson(template);
};

export const packageGenerator = (plop: PlopTypes.NodePlopAPI) => {
  plop.setGenerator('package', {
    description: 'Creates new package',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the new package to create?',
        validate: (input: string) => {
          if (input.includes('/')) {
            return 'package name cannot include slashes';
          }
          if (input.includes(' ')) {
            return 'package name cannot include spaces';
          }
          if (!input) {
            return 'package name is required';
          }
          return true;
        },
      },
      // {
      //   type: 'input',
      //   name: 'outDir',
      //   default: 'dist',
      //   message: 'What is the name of the output directory?',
      //   validate: (input: string) => {
      //     if (!input) {
      //       return 'output directory name is required';
      //     }
      //     return true;
      //   },
      // },
    ],
    actions: [
      {
        type: 'add',
        path: '{{ turbo.paths.root }}/packages/{{ dashCase name }}/package.json',
        template: join(__dirname, 'templates/package.json'),
        transform: (template: string, data: Props, _: PlopTypes.AddActionConfig) => {
          return transformJson(template, (json) => {
            json['name'] = json['name'].replace('{{ name }}', data.name);
            return json;
          });
        },
      },
      {
        type: 'add',
        path: '{{ turbo.paths.root }}/packages/{{ dashCase name }}/src/index.ts',
        templateFile: join(__dirname, 'templates/index.ts.hbs'),
      },
      {
        type: 'add',
        path: '{{ turbo.paths.root }}/packages/{{ dashCase name }}/tsconfig.json',
        template: join(__dirname, 'templates/tsconfig.json'),
        transform: baseJsonTransformer,
      },
      {
        type: 'add',
        path: '{{ turbo.paths.root }}/packages/{{ dashCase name }}/turbo.json',
        template: join(__dirname, 'templates/turbo.json'),
        transform: baseJsonTransformer,
      },
    ],
  });
};
