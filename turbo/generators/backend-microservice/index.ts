import { GrpcClientEnum } from '@packages/backend.transport';
import * as environment from '@packages/environment';
import { PlopTypes } from '@turbo/gen';
import { join } from 'path';

export const backendMicroserviceGenerator = (plop: PlopTypes.NodePlopAPI) => {
  const microservicePath = '{{ turbo.paths.root }}/apps/backend.{{ dashCase name }}';

  const envValidators: string[] = Object.keys(environment).filter((key) => {
    return environment[key]?.['constructor']?.name === 'EnvValidator';
  });

  plop.setGenerator('backend-microservice', {
    description: 'Creates new backend microservice',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the new backend microservice to create?',
        validate: (input: string) => {
          if (input.includes('/')) {
            return 'name cannot include slashes';
          }
          if (input.includes(' ')) {
            return 'name cannot include spaces';
          }
          if (!input) {
            return 'name is required';
          }
          return true;
        },
      },
      {
        type: 'list',
        name: 'envValidator',
        message: 'Choose envValidator:',
        choices: [''].concat(envValidators),
        default: '',
      },
      {
        type: 'list',
        name: 'grpcClient',
        message: 'Choose gRPC client value:',
        choices: [''].concat(Object.keys(GrpcClientEnum)),
        default: '',
      },
    ],
    actions: [
      {
        type: 'add',
        path: `${microservicePath}/package.json`,
        templateFile: join(__dirname, 'templates/package.json.hbs'),
      },
      {
        type: 'add',
        path: `${microservicePath}/.eslintrc.js`,
        templateFile: join(__dirname, 'assets/.eslintrc.js'),
      },
      {
        type: 'add',
        path: `${microservicePath}/.gitignore`,
        templateFile: join(__dirname, 'assets/.gitignore'),
      },
      {
        type: 'add',
        path: `${microservicePath}/test/jest-e2e.json`,
        templateFile: join(__dirname, 'assets/jest-e2e.json'),
      },
      {
        type: 'add',
        path: `${microservicePath}/nest-cli.json`,
        templateFile: join(__dirname, 'assets/nest-cli.json'),
      },
      {
        type: 'add',
        path: `${microservicePath}/tsconfig.build.json`,
        templateFile: join(__dirname, 'assets/tsconfig.build.json'),
      },
      {
        type: 'add',
        path: `${microservicePath}/tsconfig.json`,
        templateFile: join(__dirname, 'assets/tsconfig.json'),
      },
      {
        type: 'add',
        path: `${microservicePath}/turbo.json`,
        templateFile: join(__dirname, 'assets/turbo.json'),
      },
      {
        type: 'add',
        path: `${microservicePath}/.env.example`,
        templateFile: join(__dirname, 'templates/.env.example.hbs'),
      },
      {
        type: 'add',
        path: `${microservicePath}/src/environment.d.ts`,
        templateFile: join(__dirname, 'templates/environment.d.ts.hbs'),
      },
      {
        type: 'add',
        path: `${microservicePath}/src/{{ dashCase name }}.module.ts`,
        templateFile: join(__dirname, 'templates/microservice.module.ts.hbs'),
      },
      {
        type: 'add',
        path: `${microservicePath}/src/main.ts`,
        templateFile: join(__dirname, 'templates/main.ts.hbs'),
      },
    ],
  });
};
