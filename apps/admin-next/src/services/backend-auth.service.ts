import { HttpService } from '@admin/services/http.service';
import { BACKEND_URL } from '@admin/constants/environment';
import { AuthTokenResponse, GenerateAuthTokenRequestBody } from '@shared/auth';

export class BackendAuthService {
  private static readonly httpService = new HttpService(`${BACKEND_URL}/auth`);

  static async generateToken(name: string): Promise<string> {
    const response = await this.httpService.post<AuthTokenResponse, GenerateAuthTokenRequestBody>(
      'generate-token',
      {
        body: { name },
      },
    );

    return response.token;
  }
}
