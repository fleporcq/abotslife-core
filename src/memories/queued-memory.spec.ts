import { QueuedMemory } from './queued-memory';
import { Command } from '../command';

describe('QueuedMemory', () => {

  it('should throw errors because the command is unknown', () => {
    const memory = new QueuedMemory();
    const hello = () => {
      memory.write('SAY_HELLO');
    };
    expect(hello).toThrow('Unknown command SAY_HELLO');
  });

  it('should writeToMemory 2 commands', () => {
    const memory = new QueuedMemory();
    memory.write('FORWARD LEFT');
    const queue = memory.getQueue();
    expect(queue.length).toBe(2);
    expect(queue[0]).toBe(Command.FORWARD);
    expect(queue[1]).toBe(Command.LEFT);
  });

  it('should writeToMemory a lower command', () => {
    const memory = new QueuedMemory();
    memory.write('right');
    const queue = memory.getQueue();
    expect(queue.length).toBe(1);
    expect(queue[0]).toBe(Command.RIGHT);
  });

  it('should writeToMemory one command and be cleared', () => {
    const memory = new QueuedMemory();
    memory.write('BACKWARD');
    const queue = memory.getQueue();
    expect(queue.length).toBe(1);
    expect(queue[0]).toBe(Command.BACKWARD);
    memory.clear();
    expect(queue.length).toBe(1);
  });

  it('should works with tabs, multi space and carriage return', () => {
    const memory = new QueuedMemory();
    memory.write('right  left\nFORWARD\tbackWard');
    const queue = memory.getQueue();
    expect(queue.length).toBe(4);
    expect(queue[0]).toBe(Command.RIGHT);
    expect(queue[1]).toBe(Command.LEFT);
    expect(queue[2]).toBe(Command.FORWARD);
    expect(queue[3]).toBe(Command.BACKWARD);
  });
});
