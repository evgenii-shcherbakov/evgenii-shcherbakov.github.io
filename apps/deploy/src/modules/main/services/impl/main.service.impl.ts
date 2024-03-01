import { MainService } from '@modules/main/services/main.service';
import { inject, injectable } from 'inversify';
import { REPOSITORY_ROOT } from '@constants/paths';
import { LOG_SERVICE, LogService } from '@modules/log/services/log.service';
import { GIT_SERVICE, GitService } from '@modules/git/services/git.service';
import {
  ENVIRONMENT_SERVICE,
  EnvironmentService,
} from '@modules/environment/services/environment.service';
import { COMMAND_SERVICE, CommandService } from '@modules/command/services/command.service';
import { DEPLOY_SERVICE, DeployService } from '@modules/deploy/service/deploy.service';
import { PROJECT_SERVICE, ProjectService } from '@modules/project/services/project.service';

@injectable()
export class MainServiceImpl implements MainService {
  constructor(
    @inject(LOG_SERVICE) private readonly logService: LogService,
    @inject(PROJECT_SERVICE) private readonly projectService: ProjectService,
    @inject(GIT_SERVICE) private readonly gitService: GitService,
    @inject(ENVIRONMENT_SERVICE) private readonly environmentService: EnvironmentService,
    @inject(COMMAND_SERVICE) private readonly commandService: CommandService,
    @inject(DEPLOY_SERVICE) private readonly deployService: DeployService,
  ) {}

  async run(): Promise<void> {
    const changedFiles: string[] = await this.gitService.getChangedFiles(REPOSITORY_ROOT);

    for (const project of this.projectService.getProjects()) {
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

      if (project.prepareCommand) {
        this.logService.info(`run ${project.name} prepareCommand...`);
        await this.commandService.run(project.prepareCommand, { cwd: REPOSITORY_ROOT });
        this.logService.info(`${project.name} prepareCommand finished`);
      }

      await this.deployService.deployProject(project);
      this.logService.info(`${project.name} deployment finished`);
    }
  }
}
