import { LogService } from '@modules/log/services/log.service';
import { injectable } from 'inversify';
import { info, error, warning } from '@actions/core';

@injectable()
export class LogServiceImpl implements LogService {
  // private parseArguments(args: any[]): string {
  //   return args.reduce((acc: string, argument: any) => {
  //     const startOfLine = acc ? `${acc} ` : '';
  //
  //     if (argument === null) {
  //       return startOfLine + 'null';
  //     }
  //
  //     if (argument === undefined) {
  //       return startOfLine + 'undefined';
  //     }
  //
  //     if (argument instanceof Error) {
  //       return startOfLine + `Error:\n${argument.message}\n${argument.stack}`;
  //     }
  //
  //     if (typeof argument === 'object') {
  //       return startOfLine + JSON.stringify(argument, null, 2);
  //     }
  //
  //     return startOfLine + String(argument).trim();
  //   }, '');
  // }

  log(message: string) {
    // console.log(`[DEPLOY] LOG`, ...args);
    info(message);
  }

  info(message: string) {
    // console.info(`[DEPLOY] INFO`, ...args);
    info(message);
  }

  warn(message: string) {
    // console.warn(`[DEPLOY] WARNING`, ...args);
    warning(` ${message}`);
  }

  error(input: Error | string) {
    // console.error(`[DEPLOY] ERROR`, ...args);

    if (input instanceof Error) {
      return error(` ${input.message} ${input.stack}`);
    }

    error(` ${input}`);
  }

  raw(message: string): void {
    // console.log(...args);
    info(message);
  }
}
