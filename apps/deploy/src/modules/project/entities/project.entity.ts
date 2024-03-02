import type { EnvValidator } from '@packages/environment';

export type ProjectEntity = {
  id: string;
  name: string;
  path: string;
  watch: string[];
  appName: string;
  configPath: string;
  prepareCommands?: string[];
  validator: EnvValidator;
};
