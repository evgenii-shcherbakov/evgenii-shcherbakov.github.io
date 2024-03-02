import { ProjectEntity } from '@modules/project/entities/project.entity';

export const DEPLOY_SERVICE = Symbol('DeployService');

export interface DeployService {
  deployProject(project: ProjectEntity): Promise<void>;
}
