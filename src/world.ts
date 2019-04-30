import { Grid } from './grid';
import { BasicBot } from './bots/basic-bot';
import { Pose } from './pose/pose';
import { Orientation } from './pose/orientation';
import { Clock } from './clock';
import { Bot } from './bots/bot';

export class World {

  private grid: Grid;

  private clock: Clock;

  private bots: Map<string, BasicBot> = new Map<string, BasicBot>();


  public constructor(width: number, height: number) {
    this.grid = new Grid(width, height);
    this.clock = new Clock(this.next.bind(this));
  }

  public addBot(bot: BasicBot, pose: Pose = new Pose(0, 0, Orientation.EAST)) {
    bot._putOnWorld(this, pose);
    this.bots.set(bot.getName(), bot);
  }

  public getBot(name: string): Bot {
    return this.bots.get(name);
  }

  public setTimeInterval(timeInterval: number) {
    this.clock.setTimeInterval(timeInterval);
  }

  public getTickCount(): number {
    return this.clock.getTickCount();
  }

  public next(): this {
    this.clock.tick();
    this.bots.forEach((bot, name) => {
      bot.next();
    });
    return this;
  }

  public start(): this {
    this.clock.start();
    return this;
  }

  public pause(): this {
    this.clock.stop();
    return this;
  }

  public fastForward(count: number) {
    if (!Number.isInteger(count) || count < 1) {
      throw new Error('count must be an integer greater or equal to 1');
    }
    for (let i = 0; i < count; i++) {
      this.next();
    }
  }

}
