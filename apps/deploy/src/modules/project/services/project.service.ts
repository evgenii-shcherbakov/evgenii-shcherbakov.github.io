import { DeployProjectEntity } from '@modules/project/entities/deploy-project.entity';

export const PROJECT_SERVICE = Symbol('ProjectService');

export interface ProjectService {
  getProjects(): DeployProjectEntity[];
}
