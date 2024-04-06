import { DatabaseMapper } from '@features/database/mappers/database.mapper';
import { MongoDatabaseMapperImpl } from '@features/database/mappers/impl/mongo.database.mapper.impl';

export const mapper: DatabaseMapper = new MongoDatabaseMapperImpl();

export * from '@features/database/mappers/database.mapper';
export * from '@features/database/entities/database.entity';
