import { DeployProjectEntity } from '@modules/project/entities/deploy-project.entity';

export const ENVIRONMENT_SERVICE = Symbol('EnvironmentService');

export interface EnvironmentService {
  updateProjectEnvironment(project: DeployProjectEntity): Promise<void>;
}
