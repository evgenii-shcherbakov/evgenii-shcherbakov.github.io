import { PROJECTS } from '@constants/configuration';
import { deployVercelProject } from '@modules/deployment/functions/vercel/deploy';
import { DeployProject } from '@types';
import { deploymentLogger, runCommand } from '@shared';
import { REPOSITORY_ROOT } from '@constants/paths';

(async () => {
  const concreteProject: DeployProject | undefined = PROJECTS.find(
    ({ name }) => name === process.argv[2],
  );

  const projects: DeployProject[] = concreteProject ? [concreteProject] : PROJECTS;

  for (const project of projects) {
    deploymentLogger.info(`start ${project.name} deployment...`);

    if (project.prepareCommand) {
      await runCommand(project.prepareCommand, { cwd: REPOSITORY_ROOT });
    }

    await deployVercelProject(project);
    deploymentLogger.info(`${project.name} deployment finished`);
  }
})();
