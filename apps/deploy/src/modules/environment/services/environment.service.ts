import { ProjectEntity } from '@modules/project/entities/project.entity';

export const ENVIRONMENT_SERVICE = Symbol('EnvironmentService');

export interface EnvironmentService {
  updateProjectEnvironment(project: ProjectEntity): Promise<void>;
}
