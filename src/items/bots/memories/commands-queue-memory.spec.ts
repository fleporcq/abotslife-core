import { Command, CommandsQueueMemory } from './commands-queue-memory';

describe('CommandsQueueMemory', () => {

  it('should throw errors because the command is unknown', () => {
    const memory = new CommandsQueueMemory();
    const hello = () => {
      memory.write('SAY_HELLO');
    };
    expect(hello).toThrow('Unknown command SAY_HELLO');
  });

  it('should writeToMemory 2 commands', () => {
    const memory = new CommandsQueueMemory();
    memory.write('FORWARD TURN_LEFT');
    const queue = memory.getQueue();
    expect(queue.length).toBe(2);
    expect(queue[0]).toBe(Command.FORWARD);
    expect(queue[1]).toBe(Command.TURN_LEFT);
  });

  it('should writeToMemory a lower command', () => {
    const memory = new CommandsQueueMemory();
    memory.write('turn_right');
    const queue = memory.getQueue();
    expect(queue.length).toBe(1);
    expect(queue[0]).toBe(Command.TURN_RIGHT);
  });

  it('should writeToMemory one command and be cleared', () => {
    const memory = new CommandsQueueMemory();
    memory.write('BACKWARD');
    const queue = memory.getQueue();
    expect(queue.length).toBe(1);
    expect(queue[0]).toBe(Command.BACKWARD);
    memory.clear();
    expect(queue.length).toBe(1);
  });

  it('should works with tabs, multi space and carriage return', () => {
    const memory = new CommandsQueueMemory();
    memory.write('turn_right  TURN_LEFT\nFORWARD\tbackWard');
    const queue = memory.getQueue();
    expect(queue.length).toBe(4);
    expect(queue[0]).toBe(Command.TURN_RIGHT);
    expect(queue[1]).toBe(Command.TURN_LEFT);
    expect(queue[2]).toBe(Command.FORWARD);
    expect(queue[3]).toBe(Command.BACKWARD);
  });
});
