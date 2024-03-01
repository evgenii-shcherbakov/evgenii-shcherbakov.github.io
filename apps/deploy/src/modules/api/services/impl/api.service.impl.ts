import { HttpClient } from '@packages/common';
import { inject, injectable } from 'inversify';
import { CONFIG_SERVICE, ConfigService } from '@modules/config/services/config.service';
import { ApiService } from '@modules/api/services/api.service';
import { DeployEnvironment } from '@packages/environment';

// TODO: migrate deployment repository logic to separate package for use both in backend and deploy apps

@injectable()
export class ApiServiceImpl extends HttpClient implements ApiService {
  constructor(
    @inject(CONFIG_SERVICE) private readonly configService: ConfigService<DeployEnvironment>,
  ) {
    super(configService.get('VERCEL_API_URL'));

    this.interceptors.request.use((config) => {
      return {
        ...config,
        headers: {
          ...(config.headers ?? {}),
          Authorization: `Bearer ${this.configService.get('VERCEL_TOKEN')}`,
        },
      };
    });
  }
}
