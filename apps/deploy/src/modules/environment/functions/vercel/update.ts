import { DeployProject } from '@types';
import { apiService } from '@constants/configuration';
import { deploymentLogger } from '@shared';

const upsertEnvValue = async (projectId: string, key: string, value: string | number | boolean) => {
  return apiService.post(`v10/projects/${projectId}/env`, {
    query: { upsert: true },
    body: {
      key,
      value: String(value),
      type: 'encrypted',
      target: ['production', 'preview', 'development'],
    },
  });
};

export const handleVercelProject = async (project: DeployProject) => {
  try {
    deploymentLogger.info(`${project.name} environment update started...`);

    for (const variable of Object.keys(project.validator.toSchema())) {
      const value = process.env[variable];

      if (typeof value === 'undefined' || value === null || value === '') {
        continue;
      }

      deploymentLogger.log(`update env variable ${variable} in ${project.name}...`);
      await upsertEnvValue(project.id, variable, value);
    }

    deploymentLogger.info(`${project.name} environment successfully updated`);
  } catch (exception) {
    deploymentLogger.error(`error during update ${project.name} environment`, exception);
  }
};
