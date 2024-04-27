import { BaseMigration } from '@libs/common';
import { MigrationStatusEnum } from '@libs/common/modules/migration/enums/migration.status.enum';
import { MIGRATIONS } from '@libs/common/modules/migration/migration.constants';
import { Migration } from '@libs/common/modules/migration/migration.schema';
import { Inject, Injectable, Logger, Type } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { BackendEnvironment } from '@packages/environment';
import { Connection, Model } from 'mongoose';

@Injectable()
export class MigrationService {
  private readonly logger = new Logger(MigrationService.name);

  constructor(
    protected readonly configService: ConfigService<BackendEnvironment>,
    @InjectConnection() private readonly connection: Connection,
    @InjectModel(Migration.name) private readonly model: Model<Migration>,
    @Inject(MIGRATIONS) private readonly migrations: Type<BaseMigration>[],
  ) {}

  async run() {
    const successMigrations = await this.model
      .distinct('name', {
        status: MigrationStatusEnum.SUCCESS,
      })
      .lean();

    const leastMigrations = this.migrations.filter((migrationClass) => {
      return !successMigrations.includes(migrationClass.name);
    });

    for (const MigrationClass of leastMigrations) {
      const instance = new MigrationClass(this.connection, this.configService);
      const migrationName = MigrationClass.name;

      try {
        this.logger.log(`Start ${migrationName} migration...`);
        await instance.run();
        await this.model.create({ name: migrationName, status: MigrationStatusEnum.SUCCESS });
        this.logger.log(`${migrationName} migration completed`);
      } catch (error) {
        const errorMessage = error?.message ?? 'unknown error';
        this.logger.error(errorMessage, error?.stack);

        await this.model.create({
          name: migrationName,
          status: MigrationStatusEnum.FAILED,
          errorMessage,
        });
      }
    }
  }
}
