import { ProjectEntity } from '@modules/project/entities/project.entity';

export const FILE_SERVICE = Symbol('FileService');

export interface FileService {
  copyDeploymentFilesToBuildDirectory(project: ProjectEntity): Promise<void>;
  clearDeploymentUnnecessaryArtifacts(project: ProjectEntity): Promise<void>;
  clearBuildDirectory(): Promise<void>;
}
