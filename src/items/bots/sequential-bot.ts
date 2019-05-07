import { Bot } from './bot';
import { Command, CommandsQueueRom } from './memories/commands-queue-rom';
import { Actor } from '../actor';

export class SequentialBot extends Bot implements Actor {

  private rom: CommandsQueueRom;

  private nextStep = 0;

  private looped = 1;

  private loopCount = 0;

  constructor() {
    super();
    this.rom = new CommandsQueueRom();
  }

  public flash(program: string) {
    this.rom.flash(program);
    return this;
  }

  public loop(looped: number = Infinity) {
    this.looped = looped;
    return this;
  }

  public clear() {
    this.rom.clear();
    return this;
  }

  public hasNext(): boolean {
    return this.nextStep != null && this.nextStep < this.rom.size();
  }

  public next(): this {
    if (this.hasNext()) {
      this.execute(this.rom.get(this.nextStep));
      this.nextStep = this.prepareNextStep();
    }
    return this;
  }

  public getLoopCount() {
    return this.loopCount;
  }

  private prepareNextStep() {
    if (this.nextStep + 1 === this.rom.size()) {
      this.loopCount++;
      if (this.loopCount < this.looped) {
        return 0;
      }
      return null;
    }
    return this.nextStep + 1;
  }

  private execute(command: Command) {
    this[command]();
  }
}
