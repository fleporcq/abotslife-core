import { Command } from './command';

export class Terminal {

  private buffer: Command[] = [];

  public write(entry: string) {
    const commandValues = this.split(entry);
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
    this.buffer.push(command);
  }

  public pop() {
    return this.buffer.pop();
  }

  public get(index: number) {
    return this.buffer[index];
  }

  public size() {
    return this.buffer.length;
  }

  public clear() {
    this.buffer = [];
  }

  public _buffer() {
    return this.buffer;
  }
}
