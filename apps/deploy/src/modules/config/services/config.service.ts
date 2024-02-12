export const CONFIG_SERVICE = Symbol('ConfigService');

export interface ConfigService<Environment = Record<string, string>> {
  get<Key extends keyof Environment>(key: Key): Environment[Key];
}
