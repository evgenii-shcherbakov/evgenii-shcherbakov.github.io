import { DeploymentAppEnum } from '@domain/deployment/enums/deployment-app.enum';

export const DEPLOYMENT_API_SERVICE = Symbol('DeploymentApiService');

export interface DeploymentApiService {
  loadAllAppsOrigins(): Promise<Record<DeploymentAppEnum, string[]>>;
  isExistsAppOrigin(app: DeploymentAppEnum, origin: string): Promise<boolean>;
}
