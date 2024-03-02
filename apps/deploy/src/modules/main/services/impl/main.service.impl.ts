import { MainService } from '@modules/main/services/main.service';
import { inject, injectable } from 'inversify';
import { BUILD_ROOT, REPOSITORY_ROOT } from '@constants/paths';
import { LOG_SERVICE, LogService } from '@modules/log/services/log.service';
import { GIT_SERVICE, GitService } from '@modules/git/services/git.service';
import {
  ENVIRONMENT_SERVICE,
  EnvironmentService,
} from '@modules/environment/services/environment.service';
import { COMMAND_SERVICE, CommandService } from '@modules/command/services/command.service';
import { DEPLOY_SERVICE, DeployService } from '@modules/deploy/service/deploy.service';
import { FILE_SERVICE, FileService } from '@modules/file/services/file.service';
import { PROJECTS } from '@modules/project/constants/project.constants';
import { ProjectEntity } from '@modules/project/entities/project.entity';

@injectable()
export class MainServiceImpl implements MainService {
  constructor(
    @inject(LOG_SERVICE) private readonly logService: LogService,
    @inject(GIT_SERVICE) private readonly gitService: GitService,
    @inject(ENVIRONMENT_SERVICE) private readonly environmentService: EnvironmentService,
    @inject(COMMAND_SERVICE) private readonly commandService: CommandService,
    @inject(DEPLOY_SERVICE) private readonly deployService: DeployService,
    @inject(FILE_SERVICE) private readonly fileService: FileService,
    @inject(PROJECTS) private readonly projects: ProjectEntity[],
  ) {}

  async run(): Promise<void> {
    const changedFiles: string[] = await this.gitService.getChangedFiles(REPOSITORY_ROOT);

    for (const project of this.projects) {
      this.logService.info(`start ${project.name} environment hooks...`);

      const hasWatchedChanges = changedFiles.some((changedFile) => {
        return project.watch.some((watchedDestination) =>
          changedFile.startsWith(watchedDestination),
        );
      });

      this.logService.info(`${project.name} changed -> ${hasWatchedChanges}`);

      project.validator
        .onSuccess(() => {
          this.logService.log(`${project.name} deploy environment successfully validated`);
        })
        .onError((errorMessage: string) => {
          this.logService.error(`${project.name} ${errorMessage}`);
          process.exit(1);
        })
        .validate();

      await this.environmentService.updateProjectEnvironment(project);

      this.logService.info(`${project.name} environment hooks finished`);

      if (!hasWatchedChanges) {
        continue;
      }

      this.logService.info(`start ${project.name} deployment...`);

      await this.fileService.copyDeploymentFilesToBuildDirectory(project);

      if (project.prepareCommands?.length) {
        this.logService.info(`run ${project.name} prepareCommands...`);

        for (const prepareCommand of project.prepareCommands) {
          await this.commandService.run(prepareCommand, { cwd: BUILD_ROOT });
        }

        this.logService.info(`${project.name} prepareCommands finished`);
      }

      await this.fileService.clearDeploymentUnnecessaryArtifacts(project);
      await this.deployService.deployProject(project);
      await this.fileService.clearBuildDirectory();

      this.logService.info(`${project.name} deployment finished`);
    }
  }
}
