import { GitService } from '@modules/git/services/git.service';
import { inject, injectable } from 'inversify';
import { GitEntity } from '@modules/git/entity/git.entity';
import getRepoInfo from 'git-repo-info';
import { REPOSITORY_ROOT } from '@constants/paths';
import { CONFIG_SERVICE, ConfigService } from '@modules/config/services/config.service';
import { COMMAND_SERVICE, CommandService } from '@modules/command/services/command.service';
import { DeployEnvironment } from '@packages/environment';

@injectable()
export class GitServiceImpl implements GitService {
  constructor(
    @inject(CONFIG_SERVICE) private readonly configService: ConfigService<DeployEnvironment>,
    @inject(COMMAND_SERVICE) private readonly commandService: CommandService,
  ) {}

  getData(): GitEntity {
    const gitData = getRepoInfo(REPOSITORY_ROOT);

    return {
      commitHash: gitData.sha,
      commitRef: gitData.branch,
      remoteUrl: this.configService.get('GITHUB_REPOSITORY_URL'),
      commitMessage: gitData.commitMessage ?? this.configService.get('GITHUB_COMMIT_MESSAGE'),
      commitAuthor: gitData.committer ?? this.configService.get('GITHUB_COMMITTER'),
    };
  }

  async getChangedFiles(cwd: string): Promise<string[]> {
    const gitDiffResult = await this.commandService.run('git diff --name-only HEAD~1 HEAD', {
      cwd,
    });

    return gitDiffResult.split('\n');
  }
}
