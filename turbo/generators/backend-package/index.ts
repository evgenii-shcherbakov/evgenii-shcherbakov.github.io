import { PlopTypes } from '@turbo/gen';
import { join } from 'path';

export const backendPackageGenerator = (plop: PlopTypes.NodePlopAPI) => {
  const packagePath = '{{ turbo.paths.root }}/packages/backend.{{ dashCase name }}';

  plop.setGenerator('backend-package', {
    description: 'Creates new backend package',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the new backend package to create?',
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
        path: `${packagePath}/.eslintrc.js`,
        templateFile: join(__dirname, 'assets/.eslintrc.js'),
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
      {
        type: 'add',
        path: `${packagePath}/src/environment.d.ts`,
        templateFile: join(__dirname, 'assets/environment.d.ts'),
      },
    ],
  });
};
