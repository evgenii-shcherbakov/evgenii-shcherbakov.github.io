import { PROJECTS } from '@constants/configuration';
import { handleVercelProject } from '@modules/environment/functions/vercel/update';
import { deploymentLogger } from '@shared';

(async () => {
  for (const project of PROJECTS) {
    deploymentLogger.info(`start ${project.name} environment hooks...`);

    project.validator
      .onSuccess(() => {
        deploymentLogger.log(`${project.name} deploy environment successfully validated`);
      })
      .onError((errorMessage: string) => {
        deploymentLogger.error(`${project.name} ${errorMessage}`);
        process.exit(1);
      })
      .validate();

    await handleVercelProject(project);
    deploymentLogger.info(`${project.name} environment hooks finished`);
  }
})();
