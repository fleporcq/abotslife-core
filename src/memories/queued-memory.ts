import { Command } from '../command';
import { Memory } from './memory';

export class QueuedMemory implements Memory {

  private queue: Command[] = [];

  public write(program: string) {
    const commandValues = this.split(program);
    for (const value of commandValues) {
      const command = Command[value.toUpperCase()];
      if (command == null) {
        throw new Error('Unknown command ' + value);
      }
      this.push(command);
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

  public push(command: Command) {
    this.queue.push(command);
  }

  public pop() {
    return this.queue.pop();
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

  public _buffer() {
    return this.queue;
  }
}