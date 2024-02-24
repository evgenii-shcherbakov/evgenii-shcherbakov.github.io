import { DeploymentAppEnum } from '@domain/deployment/enums/deployment-app.enum';

export const DEPLOYMENT_API_SERVICE = Symbol('DeploymentApiService');

export interface DeploymentApiService {
  loadAllAppsDomains(): Promise<Record<DeploymentAppEnum, string[]>>;
  isExistsAppDomain(app: DeploymentAppEnum, domain: string): Promise<boolean>;
}
