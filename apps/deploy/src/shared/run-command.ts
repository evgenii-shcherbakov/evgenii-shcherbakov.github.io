import { exec, ExecOptions } from 'node:child_process';

export const runCommand = (command: string, options: ExecOptions = {}) => {
  return new Promise((resolve, reject) => {
    const childProcess = exec(command, options);

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
};
