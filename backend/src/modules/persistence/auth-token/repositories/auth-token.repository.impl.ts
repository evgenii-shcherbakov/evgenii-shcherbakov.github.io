import { AuthTokenRepository } from '@backend/domains/auth/repositories/auth-token.repository';
import { InjectModel } from '@nestjs/mongoose';
import {
  AuthTokenDocument,
  AuthTokenSymbol,
} from '@backend/modules/persistence/auth-token/schemas/auth-token.schema';
import { Model } from 'mongoose';

export class AuthTokenRepositoryImpl implements AuthTokenRepository {
  constructor(
    @InjectModel(AuthTokenSymbol) private readonly authTokenModel: Model<AuthTokenDocument>,
  ) {}

  async isExists(name: string): Promise<boolean> {
    const result = await this.authTokenModel.exists({ name });
    return !!result;
  }
}
