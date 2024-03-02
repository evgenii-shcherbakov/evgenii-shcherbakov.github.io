import { Container } from 'inversify';
import { API_SERVICE, ApiService } from '@modules/api/services/api.service';
import { ApiServiceImpl } from '@modules/api/services/impl/api.service.impl';
import { COMMAND_SERVICE, CommandService } from '@modules/command/services/command.service';
import { CommandServiceImpl } from '@modules/command/services/impl/command.service.impl';
import { CONFIG_SERVICE, ConfigService } from '@modules/config/services/config.service';
import { ConfigServiceImpl } from '@modules/config/services/impl/config.service.impl';
import { DEPLOY_SERVICE, DeployService } from '@modules/deploy/service/deploy.service';
import { DeployServiceImpl } from '@modules/deploy/service/impl/deploy.service.impl';
import {
  ENVIRONMENT_SERVICE,
  EnvironmentService,
} from '@modules/environment/services/environment.service';
import { EnvironmentServiceImpl } from '@modules/environment/services/impl/environment.service.impl';
import { GIT_SERVICE, GitService } from '@modules/git/services/git.service';
import { GitServiceImpl } from '@modules/git/services/impl/git.service.impl';
import { LOG_SERVICE, LogService } from '@modules/log/services/log.service';
import { LogServiceImpl } from '@modules/log/services/impl/log.service.impl';
import { MAIN_SERVICE, MainService } from '@modules/main/services/main.service';
import { MainServiceImpl } from '@modules/main/services/impl/main.service.impl';
import { DeployEnvironment } from '@packages/environment';
import { FILE_SERVICE, FileService } from '@modules/file/services/file.service';
import { FileServiceImpl } from '@modules/file/services/impl/file.service.impl';
import { ProjectEntity } from '@modules/project/entities/project.entity';
import { PROJECTS } from '@modules/project/constants/project.constants';
import projects from '@/projects';

export class AppModule {
  private static readonly container = this.createContainer();

  private static createContainer(): Container {
    const container = new Container({ skipBaseClassChecks: true, defaultScope: 'Singleton' });

    container.bind<ApiService>(API_SERVICE).to(ApiServiceImpl);
    container.bind<CommandService>(COMMAND_SERVICE).to(CommandServiceImpl);

    container
      .bind<ConfigService<DeployEnvironment>>(CONFIG_SERVICE)
      .to(ConfigServiceImpl<DeployEnvironment>);

    container.bind<DeployService>(DEPLOY_SERVICE).to(DeployServiceImpl);
    container.bind<EnvironmentService>(ENVIRONMENT_SERVICE).to(EnvironmentServiceImpl);
    container.bind<FileService>(FILE_SERVICE).to(FileServiceImpl);
    container.bind<GitService>(GIT_SERVICE).to(GitServiceImpl);
    container.bind<LogService>(LOG_SERVICE).to(LogServiceImpl);
    container.bind<MainService>(MAIN_SERVICE).to(MainServiceImpl);

    container
      .bind<ProjectEntity[]>(PROJECTS)
      .toConstantValue(projects(container.get(CONFIG_SERVICE)));

    return container;
  }

  static async run() {
    await this.container.get<MainService>(MAIN_SERVICE).run();
  }
}
