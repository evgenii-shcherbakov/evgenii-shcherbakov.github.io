import {
  createDeployment,
  VercelClientOptions,
  DeploymentOptions,
  Deployment,
  GitMetadata,
} from '@vercel/client';
import { VercelConfig } from '@vercel/client/dist/types';
import { join } from 'node:path';
import getRepoInfo from 'git-repo-info';
import { DeployProject } from '@types';
import { REPOSITORY_ROOT } from '@constants/paths';
import { DEPLOYMENT_API_URL, DEPLOYMENT_TOKEN } from '@constants/configuration';
import { deploymentLogger } from '@shared';
import { COMMIT_MESSAGE, COMMITTER, REPOSITORY_URL } from '@constants/github';

const getGitData = (): GitMetadata => {
  const gitData = getRepoInfo(REPOSITORY_ROOT);

  return {
    commitSha: gitData.sha,
    commitRef: gitData.branch,
    remoteUrl: REPOSITORY_URL,
    commitMessage: gitData.commitMessage ?? COMMIT_MESSAGE,
    commitAuthorName: gitData.committer ?? COMMITTER,
  };
};

export const deployVercelProject = async (project: DeployProject) => {
  try {
    const gitMetadata = getGitData();

    const clientOptions: VercelClientOptions = {
      path: REPOSITORY_ROOT,
      token: DEPLOYMENT_TOKEN,
      apiUrl: DEPLOYMENT_API_URL,
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
      gitMetadata,
    };

    const deployStream = createDeployment(clientOptions, deploymentOptions);

    let deployment: Deployment;

    const earnedPhases: string[] = [];

    for await (const { type, payload } of deployStream) {
      if (type === 'warning') {
        deploymentLogger.warn(payload);
        continue;
      }

      if (type === 'ready') {
        deployment = payload;
        deploymentLogger.info(`${project.name} deployment status: ready`);
        break;
      }

      if (type === 'error') {
        throw new Error(JSON.stringify(payload ?? {}));
      }

      if (!earnedPhases.includes(type)) {
        earnedPhases.push(type);
        deploymentLogger.log(`${type}...`);
      }
    }

    // await clearIgnoreFiles(project);
    // deploymentLogger.info(`deployment url: ${deployment.url}`); // TODO: implement additional logic later
  } catch (exception) {
    const message = exception instanceof Error ? exception.message : 'unknown deployment exception';
    deploymentLogger.error(message);
    process.exit(1);
  }
};
