import { QueuedMemory } from './queued-memory';
import { Command } from '../command';

describe('QueuedMemory', () => {

  it('should throw errors because the command is unknown', () => {
    const terminal = new QueuedMemory();
    const hello = () => {
      terminal.write('SAY_HELLO');
    };
    expect(hello).toThrow('Unknown command SAY_HELLO');
  });

  it('should writeToMemory 2 commands', () => {
    const terminal = new QueuedMemory();
    terminal.write('FORWARD LEFT');
    const buffer = terminal._buffer();
    expect(buffer.length).toBe(2);
    expect(buffer[0]).toBe(Command.FORWARD);
    expect(buffer[1]).toBe(Command.LEFT);
  });

  it('should writeToMemory a lower command', () => {
    const terminal = new QueuedMemory();
    terminal.write('right');
    const buffer = terminal._buffer();
    expect(buffer.length).toBe(1);
    expect(buffer[0]).toBe(Command.RIGHT);
  });

  it('should writeToMemory one command and be cleared', () => {
    const terminal = new QueuedMemory();
    terminal.write('BACKWARD');
    const buffer = terminal._buffer();
    expect(buffer.length).toBe(1);
    expect(buffer[0]).toBe(Command.BACKWARD);
    terminal.clear();
    expect(buffer.length).toBe(1);
  });

  it('should works with tabs, multi space and carriage return', () => {
    const terminal = new QueuedMemory();
    terminal.write('right  left\nFORWARD\tbackWard');
    const buffer = terminal._buffer();
    expect(buffer.length).toBe(4);
    expect(buffer[0]).toBe(Command.RIGHT);
    expect(buffer[1]).toBe(Command.LEFT);
    expect(buffer[2]).toBe(Command.FORWARD);
    expect(buffer[3]).toBe(Command.BACKWARD);
  });
});
