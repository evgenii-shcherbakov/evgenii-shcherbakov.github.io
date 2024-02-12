import type { EnvValidator } from '@shared/environment';

export type DeployProject = {
  id: string;
  name: string;
  path: string;
  watch: string[];
  appName: string;
  prepareCommand?: string;
  validator: EnvValidator;
};
