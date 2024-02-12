import { CommandService } from '@modules/command/services/command.service';
import { injectable } from 'inversify';
import { exec } from 'node:child_process';
import { CommandParams } from '@modules/command/types';

@injectable()
export class CommandServiceImpl implements CommandService {
  async run(command: string, params: CommandParams = {}): Promise<string> {
    return new Promise((resolve, reject) => {
      const childProcess = exec(command, params);

      let commandOutput = '';

      childProcess.stdout.on('data', (data) => {
        commandOutput += data;
        console.log(data.toString());
      });

      childProcess.stderr.on('data', (data) => {
        console.error(data.toString());
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
