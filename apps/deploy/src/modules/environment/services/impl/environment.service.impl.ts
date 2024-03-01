import { EnvironmentService } from '@modules/environment/services/environment.service';
import { inject, injectable } from 'inversify';
import { API_SERVICE, ApiService } from '@modules/api/services/api.service';
import { DeployProjectEntity } from '@modules/project/entities/deploy-project.entity';
import { LOG_SERVICE, LogService } from '@modules/log/services/log.service';

@injectable()
export class EnvironmentServiceImpl implements EnvironmentService {
  constructor(
    @inject(API_SERVICE) private readonly apiService: ApiService,
    @inject(LOG_SERVICE) private readonly logService: LogService,
  ) {}

  async updateProjectEnvironment(project: DeployProjectEntity): Promise<void> {
    try {
      this.logService.info(`${project.name} environment update started...`);

      for (const variable of Object.keys(project.validator.toSchema())) {
        const value = process.env[variable];

        if (typeof value === 'undefined' || value === null || value === '') {
          continue;
        }

        this.logService.log(`update env variable ${variable} in ${project.name}...`);

        await this.apiService.post(`v10/projects/${project.id}/env`, {
          query: { upsert: true },
          body: {
            key: variable,
            value: String(value),
            type: 'encrypted',
            target: ['production', 'preview', 'development'],
          },
        });
      }

      this.logService.info(`${project.name} environment successfully updated`);
    } catch (exception) {
      this.logService.error(exception);
    }
  }
}
