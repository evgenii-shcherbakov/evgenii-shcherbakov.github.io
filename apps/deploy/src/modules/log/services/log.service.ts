export const LOG_SERVICE = Symbol('LogService');

export interface LogService {
  log(message: string): void;
  info(message: string): void;
  warn(message: string): void;
  error(input: Error | string): void;
  raw(message: string): void;
}
