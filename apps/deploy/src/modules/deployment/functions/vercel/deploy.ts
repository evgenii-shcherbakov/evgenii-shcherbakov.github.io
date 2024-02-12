import {
  createDeployment,
  VercelClientOptions,
  DeploymentOptions,
  Deployment,
  GitMetadata,
} from '@vercel/client';
import { VercelConfig } from '@vercel/client/dist/types';
import { join, relative } from 'node:path';
// import { readFile, writeFile, rm } from 'node:fs/promises';
import getRepoInfo from 'git-repo-info';
import { DeployProject } from '@types';
import { REPOSITORY_ROOT } from '@constants/paths';
import { DEPLOYMENT_API_URL, DEPLOYMENT_TOKEN } from '@constants/configuration';
import { deploymentLogger } from '@shared';
import { COMMIT_MESSAGE, COMMITTER, REPOSITORY_URL } from '@constants/github';

// const transpileGitignoreFile = async (root: string, includes: string[]) => {
//   const path = join(root, '.gitignore');
//
//   try {
//     const content = await readFile(path, { encoding: 'utf-8' });
//     const map = { ...content.split('\n') };
//     const transformedIncludes = includes.map((include) => relative(root, include));
//
//     const generated: string = Object.keys(map).reduce((acc: string, key: string) => {
//       const value = map[key]?.toString();
//
//       if (!value) {
//         return acc;
//       }
//
//       const replacedItem = transformedIncludes.find((transformedInclude) => {
//         const t = transformedInclude.trim();
//         const v = value.trim();
//         return v === t || v === `/${t}` || v === `${t}/`;
//       });
//
//       if (replacedItem) {
//         return `${acc}\n!${replacedItem}`;
//       }
//
//       return `${acc}\n${value}`;
//     }, '');
//
//     // const includeContent = includes.map((include) => `!${relative(root, include)}`).join('\n');
//     await writeFile(join(root, '.vercelignore'), generated, { encoding: 'utf-8' });
//   } catch (exception) {
//     deploymentLogger.log(`Error during transpile ${path} to .vercelignore, skipping...`);
//   }
// };
//
// const generateIgnoreFiles = async (project: DeployProject) => {
//   await transpileGitignoreFile(REPOSITORY_ROOT, project.includes);
//   await transpileGitignoreFile(project.path, project.includes);
// };
//
// const clearIgnoreFiles = async (project: DeployProject) => {
//   await rm(join(REPOSITORY_ROOT, '.vercelignore'), { force: true });
//   await rm(join(project.path, '.vercelignore'), { force: true });
// };

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
    // await generateIgnoreFiles(project);
    deploymentLogger.log(gitMetadata);

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
