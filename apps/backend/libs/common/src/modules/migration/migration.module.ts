import { BaseMigration } from '@app/common/modules/migration/entities/base.migration';
import { MIGRATIONS } from '@app/common/modules/migration/migration.constants';
import { Migration, MigrationSchema } from '@app/common/modules/migration/migration.schema';
import { MigrationService } from '@app/common/modules/migration/migration.service';
import { DynamicModule, Module, OnApplicationBootstrap, Type } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Migration.name, schema: MigrationSchema }])],
  providers: [MigrationService],
})
export class MigrationModule implements OnApplicationBootstrap {
  constructor(private readonly migrationService: MigrationService) {}

  async onApplicationBootstrap() {
    await this.migrationService.run();
  }

  static register(...migrations: Type<BaseMigration>[]): DynamicModule {
    return {
      imports: [MongooseModule],
      providers: [
        {
          provide: MIGRATIONS,
          useValue: migrations,
        },
      ],
      module: MigrationModule,
    };
  }
}
