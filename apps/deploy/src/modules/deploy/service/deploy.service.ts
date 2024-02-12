import { DeployProjectEntity } from '@modules/project/entities/deploy-project.entity';

export const DEPLOY_SERVICE = Symbol('DeployService');

export interface DeployService {
  deployProject(project: DeployProjectEntity): Promise<void>;
}
