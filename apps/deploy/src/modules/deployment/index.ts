import { PROJECTS } from '@constants/configuration';
import { deployVercelProject } from '@modules/deployment/functions/vercel/deploy';
import { DeployProject } from '@types';
import { deploymentLogger } from '@shared';

(async () => {
  const concreteProject: DeployProject | undefined = PROJECTS.find(
    ({ name }) => name === process.argv[2],
  );

  const projects: DeployProject[] = concreteProject ? [concreteProject] : PROJECTS;

  for (const project of projects) {
    deploymentLogger.info(`start ${project.name} deployment...`);
    await deployVercelProject(project);
    deploymentLogger.info(`${project.name} deployment finished`);
  }
})();
