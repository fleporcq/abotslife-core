import { BasicBot } from './basic-bot';
import { Orientation } from '../pose/orientation';
import { Pose } from '../pose/pose';
import { World } from '../world';

describe('Basic bot', () => {

  let world;

  beforeEach(() => {
    world = new World(10, 10);
  });

  it('should throw errors because the bot is not on a world', () => {
    const bot = new BasicBot('Wall-e');
    const forward = () => {
      bot.forward();
    };
    expect(forward).toThrow('The bot can\'t move until it has been put on a world.');
    const right = () => {
      bot.right();
    };
    expect(right).toThrow('The bot can\'t turn until it has been put on a world.');
  });

  it('{0,0,E} → →', () => {
    const bot = new BasicBot('Wall-e');
    world.addBot(bot);
    bot.forward().forward();
    expect(bot._pose().position.x).toBe(2);
    expect(bot._pose().position.y).toBe(0);
  });

  it('{0,0,E} → → ←', () => {
    const bot = new BasicBot('Wall-e');
    world.addBot(bot);
    bot.forward().forward().backward();
    expect(bot._pose().position.x).toBe(1);
    expect(bot._pose().position.y).toBe(0);
  });


  it('{0,0,E} → → ↷ →', () => {
    const bot = new BasicBot('Wall-e');
    world.addBot(bot);
    bot.forward().forward().right().forward();
    expect(bot._pose().position.x).toBe(2);
    expect(bot._pose().position.y).toBe(1);
    expect(bot._pose().orientation).toBe(Orientation.SOUTH);
  });

  it('{0,0,E} → ↷ → → ↶ → →', () => {
    const bot = new BasicBot('Wall-e');
    world.addBot(bot);
    bot.forward().right().forward().forward().left().forward().forward();
    expect(bot._pose().position.x).toBe(3);
    expect(bot._pose().position.y).toBe(2);
    expect(bot._pose().orientation).toBe(Orientation.EAST);
  });

  it('{3,3,S} ↷ ↷', () => {
    const bot = new BasicBot('Wall-e');
    world.addBot(bot, new Pose(3, 3, Orientation.SOUTH));
    bot.right().right();
    expect(bot._pose().position.x).toBe(3);
    expect(bot._pose().position.y).toBe(3);
    expect(bot._pose().orientation).toBe(Orientation.NORTH);
  });

});
