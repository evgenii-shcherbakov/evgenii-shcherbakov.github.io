import { PlopTypes } from '@turbo/gen';
import { packageGenerator } from './package';
import { apiGenerator } from './api';

// export default function generator(plop: PlopTypes.NodePlopAPI): void {
//   plop.setGenerator('example', {
//     description: 'An example Turborepo generator - creates a new file at the root of the project',
//     prompts: [
//       {
//         type: 'input',
//         name: 'file',
//         message: 'What is the name of the new file to create?',
//         validate: (input: string) => {
//           if (input.includes('.')) {
//             return 'file name cannot include an extension';
//           }
//           if (input.includes(' ')) {
//             return 'file name cannot include spaces';
//           }
//           if (!input) {
//             return 'file name is required';
//           }
//           return true;
//         },
//       },
//       {
//         type: 'list',
//         name: 'type',
//         message: 'What type of file should be created?',
//         choices: ['.md', '.txt'],
//       },
//       {
//         type: 'input',
//         name: 'title',
//         message: 'What should be the title of the new file?',
//       },
//     ],
//     actions: [
//       {
//         type: 'add',
//         path: '{{ turbo.paths.root }}/{{ dashCase file }}{{ type }}',
//         templateFile: 'templates/turborepo-generators.hbs',
//         transform: (template: string, data: any, cfg: PlopTypes.AddActionConfig) => {
//           return '';
//         },
//       },
//     ],
//   });
// }

type Generator = (plop: PlopTypes.NodePlopAPI) => void;

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  const generators: Generator[] = [packageGenerator, apiGenerator];

  generators.forEach((generator: Generator) => generator(plop));
}
