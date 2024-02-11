import { DeployProject } from '../../types';

const VERCEL_API_URL = 'https://api.vercel.com';

const HEADERS = {
  'Content-type': 'application/json',
  Authorization: `Bearer ${process.env.VERCEL_TOKEN}`,
};

const upsertEnvValue = async (projectId: string, key: string, value: string | number | boolean) => {
  const response = await fetch(`${VERCEL_API_URL}/v10/projects/${projectId}/env?upsert=true`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({
      key,
      value: String(value),
      type: 'encrypted',
      target: ['production', 'preview', 'development'],
    }),
  });

  return response.json();
};

export const handleVercelProject = async (project: DeployProject) => {
  try {
    console.log(`LOG: ${project.name} environment update started...`);

    for (const variable of Object.keys(project.validator.toSchema())) {
      const value = process.env[variable];

      if (typeof value === 'undefined' || value === null || value === '') {
        continue;
      }

      console.log(`LOG: update env variable ${variable} in ${project.name}...`);
      await upsertEnvValue(project.id, variable, value);
    }

    console.log(`LOG: ${project.name} environment successfully updated`);
  } catch (exception) {
    console.error(`LOG: error during update ${project.name} environment`);
  }
};
