import { DatabaseCollection } from '@packages/common';
import { PlopTypes } from '@turbo/gen';
import { constantCase } from 'change-case-all';
import { ActionType } from 'node-plop';
import { join } from 'path';

export const backendEntityGenerator = (plop: PlopTypes.NodePlopAPI) => {
  const backendCommonPackagePath = '{{ turbo.paths.root }}/packages/backend.common';
  const commonPackagePath = '{{ turbo.paths.root }}/packages/common';

  plop.setGenerator('backend-entity', {
    description: 'Creates new backend entity',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the new backend entity to create?',
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
        name: 'collection',
        message: 'Choose database collection:',
        choices: [''].concat(Object.keys(DatabaseCollection)),
        default: '',
      },
    ],
    actions: (answers) => {
      const actions: ActionType[] = [
        {
          type: 'add',
          path: `${backendCommonPackagePath}/src/dto/models/{{ dashCase name }}.dto.ts`,
          templateFile: join(__dirname, 'templates/entity.dto.ts.hbs'),
        },
        {
          type: 'modify',
          path: `${backendCommonPackagePath}/src/dto/index.ts`,
          pattern: /($)/g,
          template: "export * from './models/{{ dashCase name }}.dto';\n$1",
        },
        {
          type: 'add',
          path: `${backendCommonPackagePath}/src/interfaces/models/{{ dashCase name }}.model.ts`,
          templateFile: join(__dirname, 'templates/entity.model.ts.hbs'),
        },
        {
          type: 'modify',
          path: `${backendCommonPackagePath}/src/interfaces/index.ts`,
          pattern: /($)/g,
          template: "export * from './models/{{ dashCase name }}.model';\n$1",
        },
        {
          type: 'add',
          path: `${backendCommonPackagePath}/src/schemas/{{ dashCase name }}.schema.ts`,
          templateFile: join(__dirname, 'templates/entity.schema.ts.hbs'),
        },
        {
          type: 'modify',
          path: `${backendCommonPackagePath}/src/schemas/index.ts`,
          pattern: /($)/g,
          template: "export * from './{{ dashCase name }}.schema';\n$1",
        },
        {
          type: 'add',
          path: `${backendCommonPackagePath}/src/modules/persistence/{{ dashCase name }}/{{ dashCase name }}.repository.ts`,
          templateFile: join(__dirname, 'templates/entity.repository.ts.hbs'),
        },
        {
          type: 'add',
          path: `${backendCommonPackagePath}/src/modules/persistence/{{ dashCase name }}/impl/{{ dashCase name }}.repository.impl.ts`,
          templateFile: join(__dirname, 'templates/entity.repository.impl.ts.hbs'),
        },
        {
          type: 'add',
          path: `${backendCommonPackagePath}/src/modules/persistence/{{ dashCase name }}/{{ dashCase name }}.persistence.module.ts`,
          templateFile: join(__dirname, 'templates/entity.persistence.module.ts.hbs'),
        },
        {
          type: 'add',
          path: `${backendCommonPackagePath}/src/modules/persistence/{{ dashCase name }}/index.ts`,
          templateFile: join(__dirname, 'templates/index.ts.hbs'),
        },
        {
          type: 'modify',
          path: `${backendCommonPackagePath}/src/modules/persistence/submodules.ts`,
          pattern: /(\/\/ PERSISTENCE SUBMODULE IMPORTS)/g,
          template:
            "import { {{ pascalCase name }}PersistenceModule } from 'modules/persistence/{{ dashCase name }}';\n$1",
        },
        {
          type: 'modify',
          path: `${backendCommonPackagePath}/src/modules/persistence/submodules.ts`,
          pattern: /(\/\/ PERSISTENCE SUBMODULE ARRAY)/g,
          template: '{{ pascalCase name }}PersistenceModule,\n\t$1',
        },
        {
          type: 'modify',
          path: `${backendCommonPackagePath}/src/modules/persistence/index.ts`,
          pattern: /($)/g,
          template: "export * from './{{ dashCase name }}';\n$1",
        },
      ];

      if (!answers.collection) {
        answers.collection = constantCase(answers.name);

        actions.push({
          type: 'modify',
          path: `${commonPackagePath}/src/enums/common.enums.ts`,
          pattern: /(\/\/ DATABASE COLLECTION ITEMS)/g,
          template: "{{ constantCase name }} = '{{ dashCase name }}',\n\t$1",
        });

        console.log(`
          Generator will create missing database collection value, but make sure that it has correct spelling.
          Go to "${process.cwd()}/packages/common/src/enums/database-collection.enum.ts" to check it.
        `);
      }

      return actions;
    },
  });
};
