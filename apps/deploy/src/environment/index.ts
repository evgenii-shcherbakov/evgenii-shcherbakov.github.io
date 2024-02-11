import { PROJECTS } from './constants/configuration';
import { handleVercelProject } from './functions/vercel/update';

(async () => {
  for (const project of PROJECTS) {
    console.log(`LOG: start ${project.name} environment validation...`);

    project.validator
      .onSuccess(() => {
        console.log(`LOG: ${project.name} deploy environment successfully validated`);
      })
      .onError((errorMessage: string) => {
        console.error(`LOG: ${errorMessage}`);
        process.exit(1);
      })
      .validate();

    await handleVercelProject(project);
  }
})();
