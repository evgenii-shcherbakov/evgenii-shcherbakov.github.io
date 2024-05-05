import { PlopTypes } from '@turbo/gen';
import { backendEntityGenerator } from './backend-entity';
import { backendMicroserviceGenerator } from './backend-microservice';
import { backendPackageGenerator } from './backend-package';
import { packageGenerator } from './package';

type Generator = (plop: PlopTypes.NodePlopAPI) => void;

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  const generators: Generator[] = [
    packageGenerator,
    backendPackageGenerator,
    backendMicroserviceGenerator,
    backendEntityGenerator,
  ];

  generators.forEach((generator: Generator) => generator(plop));
}
