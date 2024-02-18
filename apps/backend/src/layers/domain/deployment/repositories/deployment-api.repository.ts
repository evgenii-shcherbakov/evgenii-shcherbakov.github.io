import { DeploymentAppEnum } from '@domain/deployment/enums/deployment-app.enum';

export const DEPLOYMENT_API_REPOSITORY = Symbol('DeploymentApiRepository');

export interface DeploymentApiRepository {
  getAppMainDomains(app: DeploymentAppEnum | string, limit?: number): Promise<string[]>;
  getAppDeploymentDomains(app: DeploymentAppEnum | string, limit?: number): Promise<string[]>;
}
