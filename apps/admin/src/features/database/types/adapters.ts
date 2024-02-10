import { DatabaseService } from '@features/database/services/database.service';
import { DatabaseMapper } from '@features/database/mappers/database.mapper';

export type MapperAdapter = new () => DatabaseMapper;

export type ServiceAdapter = new (mapper: DatabaseMapper, resource: string) => DatabaseService;
