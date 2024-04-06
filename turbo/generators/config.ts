import { PlopTypes } from '@turbo/gen';
import { packageGenerator } from './package';

type Generator = (plop: PlopTypes.NodePlopAPI) => void;

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  const generators: Generator[] = [packageGenerator];

  generators.forEach((generator: Generator) => generator(plop));
}
