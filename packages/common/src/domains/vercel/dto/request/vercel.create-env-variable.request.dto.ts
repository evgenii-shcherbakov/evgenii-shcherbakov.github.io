import { VercelDeploymentTargetEnum } from '../../enums/vercel.deployment-target.enum';
import { VercelEnvVariableTypeEnum } from '../../enums/vercel.env-variable-type.enum';

export class VercelCreateEnvVariableRequestDto {
  key: string;
  value: string;
  type: VercelEnvVariableTypeEnum;
  target: VercelDeploymentTargetEnum[];
}
