import { BackendContactTypeEnum } from 'domains/backend/contact/enums';

export interface BackendContact {
  link?: string;
  name: string;
  value: string;
  type: BackendContactTypeEnum;
}
