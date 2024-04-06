import { LogService } from '@modules/log/services/log.service';
import { injectable } from 'inversify';
import { info, error, warning } from '@actions/core';

@injectable()
export class LogServiceImpl implements LogService {
  log(message: string) {
    info(message);
  }

  info(message: string) {
    info(message);
  }

  warn(message: string) {
    warning(` ${message}`);
  }

  error(input: Error | string) {
    if (input instanceof Error) {
      return error(` ${input.message} ${input.stack}`);
    }

    error(` ${input}`);
  }

  raw(message: string): void {
    info(message);
  }
}
