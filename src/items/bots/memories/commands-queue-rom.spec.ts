import { Command, CommandsQueueRom } from './commands-queue-rom';

describe('CommandsQueueRom', () => {

  it('should throw errors because the command is unknown', () => {
    const rom = new CommandsQueueRom();
    const hello = () => {
      rom.flash('SAY_HELLO');
    };
    expect(hello).toThrow('Unknown command SAY_HELLO');
  });

  it('should flash 2 commands', () => {
    const rom = new CommandsQueueRom();
    rom.flash('FORWARD TURN_LEFT');
    const queue = rom.getQueue();
    expect(queue.length).toBe(2);
    expect(queue[0]).toBe(Command.FORWARD);
    expect(queue[1]).toBe(Command.TURN_LEFT);
  });

  it('should flash a lower command', () => {
    const rom = new CommandsQueueRom();
    rom.flash('turn_right');
    const queue = rom.getQueue();
    expect(queue.length).toBe(1);
    expect(queue[0]).toBe(Command.TURN_RIGHT);
  });

  it('should flash one command and be cleared', () => {
    const rom = new CommandsQueueRom();
    rom.flash('BACKWARD');
    const queue = rom.getQueue();
    expect(queue.length).toBe(1);
    expect(queue[0]).toBe(Command.BACKWARD);
    rom.clear();
    expect(queue.length).toBe(1);
  });

  it('should works with tabs, multi space and carriage return', () => {
    const rom = new CommandsQueueRom();
    rom.flash('turn_right  TURN_LEFT\nFORWARD\tbackWard');
    const queue = rom.getQueue();
    expect(queue.length).toBe(4);
    expect(queue[0]).toBe(Command.TURN_RIGHT);
    expect(queue[1]).toBe(Command.TURN_LEFT);
    expect(queue[2]).toBe(Command.FORWARD);
    expect(queue[3]).toBe(Command.BACKWARD);
  });
});
