/// <reference types="vite/client" />

import { AdminEnvironment } from '@shared/environment';

interface ImportMetaEnv extends AdminEnvironment {}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
