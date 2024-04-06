import { PlopTypes } from '@turbo/gen';
import { join } from 'path';

export const packageGenerator = (plop: PlopTypes.NodePlopAPI) => {
  const packagePath = '{{ turbo.paths.root }}/packages/{{ dashCase name }}';

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
    ],
    actions: [
      {
        type: 'add',
        path: `${packagePath}/package.json`,
        templateFile: join(__dirname, 'templates/package.json.hbs'),
      },
      {
        type: 'add',
        path: `${packagePath}/tsconfig.json`,
        templateFile: join(__dirname, 'assets/tsconfig.json'),
      },
      {
        type: 'add',
        path: `${packagePath}/turbo.json`,
        templateFile: join(__dirname, 'assets/turbo.json'),
      },
      {
        type: 'add',
        path: `${packagePath}/src/index.ts`,
        templateFile: join(__dirname, 'assets/index.ts'),
      },
    ],
  });
};
