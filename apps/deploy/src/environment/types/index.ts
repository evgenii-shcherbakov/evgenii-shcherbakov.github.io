import { EnvValidator } from '@shared/environment';

export type DeployProject = {
  id: string;
  name: string;
  validator: EnvValidator;
};
