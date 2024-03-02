import { inject, injectable } from 'inversify';
import { FileService } from '@modules/file/services/file.service';
import { ProjectEntity } from '@modules/project/entities/project.entity';
import { LOG_SERVICE, LogService } from '@modules/log/services/log.service';
import { join, relative, resolve } from 'node:path';
import { BUILD_ROOT, REPOSITORY_ROOT } from '@constants/paths';
import { cp, rm } from 'node:fs/promises';

@injectable()
export class FileServiceImpl implements FileService {
  constructor(@inject(LOG_SERVICE) private readonly logService: LogService) {}

  private readonly DEFAULT_COPIED_ITEMS: string[] = [
    resolve(REPOSITORY_ROOT, 'packages'),
    resolve(REPOSITORY_ROOT, 'turbo'),
    join(REPOSITORY_ROOT, '.gitignore'),
    join(REPOSITORY_ROOT, 'package.json'),
    join(REPOSITORY_ROOT, 'turbo.json'),
  ];

  async copyDeploymentFilesToBuildDirectory(project: ProjectEntity): Promise<void> {
    this.logService.info(`copy ${project.name} files to build directory...`);

    for (const copiedItem of [...this.DEFAULT_COPIED_ITEMS, project.path]) {
      const destination = resolve(BUILD_ROOT, relative(REPOSITORY_ROOT, copiedItem));
      await cp(copiedItem, destination, { recursive: true, force: true, errorOnExist: false });
    }
  }

  async clearBuildDirectory(): Promise<void> {
    this.logService.info(`clear build directory...`);
    await rm(BUILD_ROOT, { recursive: true, force: true });
  }

  async clearDeploymentUnnecessaryArtifacts(project: ProjectEntity): Promise<void> {
    this.logService.info(`clear ${project.name} deployment unnecessary artifacts...`);
    await rm(join(BUILD_ROOT, 'package-lock.json'), { recursive: true, force: true });
  }
}
