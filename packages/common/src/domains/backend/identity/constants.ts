import { BackendIdentity } from 'domains/backend/identity/interfaces';
import { DEFAULT_PLACEHOLDER } from 'constants/common';

export const DEFAULT_BACKEND_IDENTITY: BackendIdentity = {
  fullName: DEFAULT_PLACEHOLDER,
  mainJobTitle: DEFAULT_PLACEHOLDER,
  jobTitles: [],
  summary: DEFAULT_PLACEHOLDER,
};
