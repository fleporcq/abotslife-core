import { Grid } from '../grid';
import { Orientation } from '../orientation';
import { Position } from '../position';
import { SequentialBot } from './sequential-bot';

describe('Sequential bot', () => {

  let grid;

  beforeEach(() => {
    grid = new Grid(10, 10);
  });

  it('{0,0:E} → →', () => {
    const bot = new SequentialBot('Wall-e');
    grid.addBot(bot);
    bot.write('FORWARD FORWARD');
    while (bot.hasNext()) {
      bot.next();
    }
    expect(bot._position().x).toBe(2);
    expect(bot._position().y).toBe(0);
  });

  it('{0,0:E} → → ←', () => {
    const bot = new SequentialBot('Wall-e');
    grid.addBot(bot);
    bot.write('FORWARD FORWARD BACKWARD');
    while (bot.hasNext()) {
      bot.next();
    }
    expect(bot._position().x).toBe(1);
    expect(bot._position().y).toBe(0);
  });

  it('{0,0:E} → → ↷ →', () => {
    const bot = new SequentialBot('Wall-e');
    grid.addBot(bot);
    bot.write('FORWARD FORWARD RIGHT FORWARD');
    while (bot.hasNext()) {
      bot.next();
    }
    expect(bot._position().x).toBe(2);
    expect(bot._position().y).toBe(1);
    expect(bot._orientation()).toBe(Orientation.SOUTH);
  });

  it('{0,0:E} → ↷ → → ↶ → →', () => {
    const bot = new SequentialBot('Wall-e');
    grid.addBot(bot);
    bot.write('FORWARD RIGHT FORWARD FORWARD LEFT FORWARD FORWARD');
    while (bot.hasNext()) {
      bot.next();
    }
    expect(bot._position().x).toBe(3);
    expect(bot._position().y).toBe(2);
    expect(bot._orientation()).toBe(Orientation.EAST);
  });

  it('{3,3:S} ↷ ↷', () => {
    const bot = new SequentialBot('Wall-e');
    grid.addBot(bot, new Position(3, 3), Orientation.SOUTH);
    bot.write('RIGHT RIGHT');
    while (bot.hasNext()) {
      bot.next();
    }
    expect(bot._position().x).toBe(3);
    expect(bot._position().y).toBe(3);
    expect(bot._orientation()).toBe(Orientation.NORTH);
  });

  it('{0,0:E} loop → ↷ → ↶', () => {
    const bot = new SequentialBot('Wall-e');
    grid.addBot(bot);
    bot.write('FORWARD RIGHT FORWARD LEFT');
    bot.loop();
    while (bot.hasNext()) {
      bot.next();
      if (bot.getLoopCount() === 3) {
        break;
      }
    }
    expect(bot._position().x).toBe(3);
    expect(bot._position().y).toBe(3);
  });

  it('{0,0:E} loop 4 times → ↷ → ↶', () => {
    const bot = new SequentialBot('Wall-e');
    grid.addBot(bot);
    bot.write('FORWARD RIGHT FORWARD LEFT');
    bot.loop(4);
    while (bot.hasNext()) {
      bot.next();
    }
    expect(bot._position().x).toBe(4);
    expect(bot._position().y).toBe(4);
  });

});
