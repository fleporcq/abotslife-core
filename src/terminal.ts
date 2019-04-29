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
      this.add(command);
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

  private add(command: Command) {
    this.buffer.push(command);
  }

  public clear() {
    this.buffer = [];
  }

  public _buffer() {
    return this.buffer;
  }
}
