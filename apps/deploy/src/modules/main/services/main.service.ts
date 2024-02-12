export const MAIN_SERVICE = Symbol('MainService');

export interface MainService {
  run(): Promise<void>;
}
