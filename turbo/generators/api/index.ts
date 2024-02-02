import { PlopTypes } from '@turbo/gen';
import { join } from 'path';

export const apiGenerator = (plop: PlopTypes.NodePlopAPI) => {
  plop.setGenerator('api', {
    description: 'Creates api adapter (serverless adapter for Vercel)',
    prompts: [
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
      {
        type: 'input',
        name: 'code',
        default: '',
        message: 'Write exported code without semi, if needed',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '{{ turbo.paths.root }}/api/index.js',
        templateFile: join(__dirname, 'templates/index.js.hbs'),
      },
    ],
  });
};
