import { CommandService } from '@modules/command/services/command.service';
import { inject, injectable } from 'inversify';
import { exec } from 'node:child_process';
import { CommandParams } from '@modules/command/types';
import { LOG_SERVICE, LogService } from '@modules/log/services/log.service';

@injectable()
export class CommandServiceImpl implements CommandService {
  constructor(@inject(LOG_SERVICE) private readonly logService: LogService) {}

  async run(command: string, params: CommandParams = {}): Promise<string> {
    return new Promise((resolve, reject) => {
      const childProcess = exec(command, params);

      let commandOutput = '';

      childProcess.stdout.on('data', (data) => {
        commandOutput += data;
        this.logService.raw(data.toString());
      });

      childProcess.stderr.on('data', (data) => {
        this.logService.raw(data.toString());
      });

      childProcess.on('error', (error) => {
        reject(error);
      });

      childProcess.on('exit', (code) => {
        if (code !== 0) {
          reject(new Error(`command '${command}' exited with code ${code}`));
        } else {
          resolve(commandOutput);
        }
      });
    });
  }
}
