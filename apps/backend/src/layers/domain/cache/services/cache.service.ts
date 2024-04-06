import { DeploymentAppEnum } from '@domain/deployment/enums/deployment-app.enum';
import { Milliseconds, WrapTTL } from 'cache-manager/dist/caching';
import { CacheKeyEnum } from '@domain/cache/enums/cache-key.enum';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

export const CACHE_SERVICE = CACHE_MANAGER;

export type CacheStructure = Record<keyof CacheKeyEnum, any> & {
  [CacheKeyEnum.DOMAINS]: Partial<Record<DeploymentAppEnum, string[]>>;
};

export interface CacheService {
  get<Key extends CacheKeyEnum>(key: Key): Promise<CacheStructure[Key] | undefined>;
  set<Key extends CacheKeyEnum>(
    key: Key,
    value: CacheStructure[Key],
    ttl?: Milliseconds,
  ): Promise<void>;
  del(key: CacheKeyEnum): Promise<void>;
  wrap<Key extends CacheKeyEnum>(
    key: Key,
    fn: () => Promise<CacheStructure[Key]>,
    ttl?: WrapTTL<CacheStructure[Key]>,
    refreshThreshold?: Milliseconds,
  ): Promise<CacheStructure[Key]>;
}
