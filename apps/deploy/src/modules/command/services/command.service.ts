import { CommandParams } from '@modules/command/types';

export const COMMAND_SERVICE = Symbol('CommandService');

export interface CommandService {
  run(command: string, params?: CommandParams): Promise<string>;
}
