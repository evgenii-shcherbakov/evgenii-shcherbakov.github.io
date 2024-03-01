import { PlopTypes } from '@turbo/gen';
import { packageGenerator } from './package';
import { apiGenerator } from './api';

type Generator = (plop: PlopTypes.NodePlopAPI) => void;

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  const generators: Generator[] = [packageGenerator, apiGenerator];

  generators.forEach((generator: Generator) => generator(plop));
}
