import { ConfigService } from '@modules/config/services/config.service';
import { config, DotenvParseOutput } from 'dotenv';
import { inject, injectable } from 'inversify';
import { LOG_SERVICE, LogService } from '@modules/log/services/log.service';

@injectable()
export class ConfigServiceImpl<Environment = Record<string, string>>
  implements ConfigService<Environment>
{
  private readonly env: DotenvParseOutput;

  constructor(@inject(LOG_SERVICE) private readonly logService: LogService) {
    const { error, parsed } = config();

    if (error) {
      this.logService.error(error);
      throw error;
    }

    this.env = parsed;
  }

  get<Key extends keyof Environment>(key: Key): Environment[Key] {
    return this.env[key.toString()] as Environment[Key];
  }
}
