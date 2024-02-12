export const LOG_SERVICE = Symbol('LogService');

export interface LogService {
  log(...args: any[]): void;
  info(...args: any[]): void;
  warn(...args: any[]): void;
  error(...args: any[]): void;
}
