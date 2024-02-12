import { DeployService } from '@modules/deploy/service/deploy.service';
import { inject, injectable } from 'inversify';
import { GIT_SERVICE, GitService } from '@modules/git/services/git.service';
import { LOG_SERVICE, LogService } from '@modules/log/services/log.service';
import { DeployProjectEntity } from '@modules/project/entities/deploy-project.entity';
import {
  createDeployment,
  Deployment,
  DeploymentOptions,
  VercelClientOptions,
} from '@vercel/client';
import { REPOSITORY_ROOT } from '@constants/paths';
import { VercelConfig } from '@vercel/client/dist/types';
import { join } from 'node:path';
import { CONFIG_SERVICE, ConfigService } from '@modules/config/services/config.service';
import { DeployEnvironment } from '@shared/environment';

@injectable()
export class DeployServiceImpl implements DeployService {
  constructor(
    @inject(GIT_SERVICE) private readonly gitService: GitService,
    @inject(LOG_SERVICE) private readonly logService: LogService,
    @inject(CONFIG_SERVICE) private readonly configService: ConfigService<DeployEnvironment>,
  ) {}

  async deployProject(project: DeployProjectEntity): Promise<void> {
    try {
      const gitData = this.gitService.getData();

      const clientOptions: VercelClientOptions = {
        path: REPOSITORY_ROOT,
        token: this.configService.get('VERCEL_TOKEN'),
        apiUrl: this.configService.get('VERCEL_API_URL'),
      };

      const config: VercelConfig = await import(join(project.path, 'vercel.json'));

      const deploymentOptions: DeploymentOptions = {
        version: config.version,
        env: config.env,
        public: config.public,
        redirects: config.redirects,
        rewrites: config.rewrites,
        build: config.build,
        builds: config.builds,
        routes: config.routes,
        functions: config.functions,
        regions: config.regions,
        name: config.name ?? project.appName,
        projectSettings: config.builds
          ? undefined
          : {
              framework: config.framework,
              installCommand: config.installCommand,
              buildCommand: config.buildCommand,
              outputDirectory: config.outputDirectory,
              devCommand: config.devCommand,
            },
        target: 'production',
        gitMetadata: {
          commitSha: gitData.commitHash,
          commitRef: gitData.commitRef,
          commitMessage: gitData.commitMessage,
          commitAuthorName: gitData.commitAuthor,
          remoteUrl: gitData.remoteUrl,
        },
      };

      const deployStream = createDeployment(clientOptions, deploymentOptions);

      let deployment: Deployment;

      const earnedPhases: string[] = [];

      for await (const { type, payload } of deployStream) {
        if (type === 'warning') {
          this.logService.warn(payload);
          continue;
        }

        if (type === 'ready') {
          deployment = payload;
          this.logService.info(`${project.name} deployment status: ready`);
          break;
        }

        if (type === 'error') {
          throw new Error(JSON.stringify(payload ?? {}));
        }

        if (!earnedPhases.includes(type)) {
          earnedPhases.push(type);
          this.logService.log(`${type}...`);
        }
      }

      // await clearIgnoreFiles(project);
      // deploymentLogger.info(`deployment url: ${deployment.url}`); // TODO: implement additional logic later
    } catch (exception) {
      const message =
        exception instanceof Error ? exception.message : 'unknown deployment exception';

      this.logService.error(message);
      process.exit(1);
    }
  }
}
