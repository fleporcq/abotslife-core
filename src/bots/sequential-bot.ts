import { BasicBot } from './basic-bot';
import { QueuedMemory } from '../memories/queued-memory';
import { Command } from '../command';

export class SequentialBot extends BasicBot {

  private memory: QueuedMemory;

  private nextStep = 0;

  private looped = 1;

  private loopCount = 0;

  constructor(name: string) {
    super(name);
    this.memory = new QueuedMemory();
  }

  public writeToMemory(buffer: string) {
    this.memory.write(buffer);
    return this;
  }

  public loop(looped: number = Infinity) {
    this.looped = looped;
    return this;
  }

  public clearMemory() {
    this.memory.clear();
    return this;
  }

  public hasNext(): boolean {
    return this.nextStep != null;
  }

  public next(): this {
    if (this.hasNext()) {
      this.execute(this.memory.get(this.nextStep));
      this.nextStep = this.prepareNextStep();
    }
    return this;
  }

  public getLoopCount() {
    return this.loopCount;
  }

  private prepareNextStep() {
    if (this.nextStep + 1 === this.memory.size()) {
      this.loopCount++;
      if (this.loopCount < this.looped) {
        return 0;
      }
      return null;
    }
    return this.nextStep + 1;
  }

  private execute(command: Command) {
    if (typeof this[command] !== 'function') {
      throw new Error('Unknown command ' + command);
    }
    this[command]();
  }
}
