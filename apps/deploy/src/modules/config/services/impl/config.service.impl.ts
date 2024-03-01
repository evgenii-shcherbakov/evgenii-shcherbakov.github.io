import { ConfigService } from '@modules/config/services/config.service';
import { config, DotenvParseOutput } from 'dotenv';
import { inject, injectable } from 'inversify';
import { LOG_SERVICE, LogService } from '@modules/log/services/log.service';
import { deployEnvValidator } from '@packages/environment';

@injectable()
export class ConfigServiceImpl<Environment = Record<string, string>>
  implements ConfigService<Environment>
{
  private readonly env: DotenvParseOutput;

  constructor(@inject(LOG_SERVICE) private readonly logService: LogService) {
    this.env = this.getEnv();
  }

  private validate() {
    deployEnvValidator
      .onSuccess(() => this.logService.info(`deploy environment successfully validated`))
      .onError((errorMessage) => {
        this.logService.error(errorMessage);
        process.exit(1);
      })
      .validate();
  }

  private getEnv(): DotenvParseOutput {
    const { error, parsed } = config();

    if (process.env.NODE_ENV === 'production') {
      this.validate();
      return parsed ?? {};
    }

    if (error) {
      this.logService.error(error);
    }

    return parsed ?? {};
  }

  get<Key extends keyof Environment>(key: Key): Environment[Key] {
    return (this.env[key.toString()] ?? process.env[key.toString()]) as Environment[Key];
  }
}
