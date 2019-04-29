import { Bot } from './bots/bot';
import { Position } from './position';
import { Orientation } from './orientation';

export class Grid {

  private width: number;

  private height: number;

  private bots: Map<string, Bot> = new Map<string, Bot>();

  constructor(width: number, height: number) {
    if (!Number.isInteger(width) || width < 1 || !Number.isInteger(height) || height < 1) {
      throw new Error('The width and height must be integers greater or equal to one');
    }
    this.width = width;
    this.height = height;
  }

  public getWidth(): number {
    return this.width;
  }

  public getHeight(): number {
    return this.height;
  }

  public addBot(bot: Bot, position?: Position, orientation?: Orientation) {
    bot._putOnGrid(this, position, orientation);
    this.bots.set(bot.getName(), bot);
  }

  public getBot(name: string) {
    this.bots.get(name);
  }

}
