import { PlopTypes } from '@turbo/gen';
import { join, resolve } from 'path';
import { readdirSync } from 'fs';

export const apiGenerator = (plop: PlopTypes.NodePlopAPI) => {
  const templates = readdirSync(resolve(__dirname, 'templates'));
  const options = templates.map((template) => template.replace('.hbs', ''));

  plop.setGenerator('api', {
    description: 'Creates api adapter (serverless adapter for Vercel)',
    prompts: [
      {
        type: 'list',
        name: 'preset',
        message: 'What preset should be used?',
        choices: options,
      },
      {
        type: 'input',
        name: 'path',
        message: 'Write relative path from repository root to serverless handler file',
        validate: (input: string) => {
          if (input.includes(' ')) {
            return 'path cannot include spaces';
          }
          if (!input) {
            return 'path is required';
          }
          return true;
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: '{{ turbo.paths.root }}/api/index.js',
        templateFile: join(__dirname, 'templates/{{ preset }}.hbs'),
        force: true,
      },
    ],
  });
};
