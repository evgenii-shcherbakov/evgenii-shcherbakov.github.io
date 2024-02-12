import { PROJECTS } from '@constants/configuration';
import { handleVercelProject } from '@modules/environment/functions/vercel/update';
import { deploymentLogger, runCommand } from '@shared';
import getRepoInfo from 'git-repo-info';
import { REPOSITORY_ROOT } from '@constants/paths';

(async () => {
  deploymentLogger.log(getRepoInfo(REPOSITORY_ROOT));

  const gitDiffResult = await runCommand('git diff --name-only HEAD~1 HEAD', {
    cwd: REPOSITORY_ROOT,
  });

  const changedFiles: string[] = (gitDiffResult?.toString() ?? '').split('\n');

  deploymentLogger.log(changedFiles);

  for (const project of PROJECTS) {
    deploymentLogger.info(`start ${project.name} environment hooks...`);
    deploymentLogger.info(project.watch);

    const hasGitChanges = changedFiles.some((changedFile) => {
      return project.watch.some((watchedDestination) => changedFile.startsWith(watchedDestination));
    });

    deploymentLogger.info(`${project.name} changed ->`, hasGitChanges);

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
