import { GitEntity } from '@modules/git/entity/git.entity';

export const GIT_SERVICE = Symbol('GitService');

export interface GitService {
  getData(): GitEntity;
  getChangedFiles(cwd: string): Promise<string[]>;
}
