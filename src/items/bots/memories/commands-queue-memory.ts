import { Memory } from './memory';

export enum Command {
  FORWARD = 'forward',
  BACKWARD = 'backward',
  TURN_LEFT = 'turnLeft',
  TURN_RIGHT = 'turnRight',
  TURN_BACK = 'turnBack',
  WAIT = 'wait'
}

export class CommandsQueueMemory implements Memory {

  private queue: Command[] = [];

  public getQueue() {
    return this.queue;
  }

  public write(program: string) {
    const commandValues = this.split(program);
    for (const value of commandValues) {
      const command = Command[value.toUpperCase()];
      if (command == null) {
        throw new Error('Unknown command ' + value);
      }
      this.queue.push(command);
    }
  }

  private split(entry: string): string[] {
    const commands = [];
    const chunks = entry.split(/\s/g);
    for (let chunk of chunks) {
      chunk = chunk.trim();
      if (chunk !== '') {
        commands.push(chunk);
      }
    }
    return commands;
  }

  public get(index: number) {
    return this.queue[index];
  }

  public size() {
    return this.queue.length;
  }

  public clear() {
    this.queue = [];
  }
}
