import { EnvValidator } from 'entities/env-validator';
import { AdminSchema } from 'schemas/admin.schema';
import { BackendSchema } from 'schemas/backend.schema';
import { FrontendSchema } from 'schemas/frontend.schema';
import { DeploySchema } from 'schemas/deploy.schema';
import { EnvironmentOf } from 'types/environment.types';

export type { EnvValidator };

export const adminEnvValidator = new EnvValidator(AdminSchema);
export const backendEnvValidator = new EnvValidator(BackendSchema);
export const deployEnvValidator = new EnvValidator(DeploySchema);
export const frontendEnvValidator = new EnvValidator(FrontendSchema);

export type AdminEnvironment = EnvironmentOf<typeof AdminSchema>;
export type BackendEnvironment = EnvironmentOf<typeof BackendSchema>;
export type DeployEnvironment = EnvironmentOf<typeof DeploySchema>;
export type FrontendEnvironment = EnvironmentOf<typeof FrontendSchema>;
