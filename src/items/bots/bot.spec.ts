import { Bot } from './bot';
import { Orientation } from '../../pose/orientation';
import { Pose } from '../../pose/pose';
import { World } from '../../world';

describe('Basic bot', () => {

  let world;

  beforeEach(() => {
    world = new World(10, 10);
  });

  it('should throw errors because the bot is not on a world', () => {
    const bot = new Bot();
    const forward = () => {
      bot.forward();
    };
    expect(forward).toThrow('The item is not yet world aware');
    const right = () => {
      bot.right();
    };
    expect(right).toThrow('The item is not yet world aware');
  });

  it('{0,0,E} → →', () => {
    const bot = new Bot();
    world.add(bot, new Pose(0, 0, Orientation.EAST));
    bot.forward().forward();
    expect(bot.getPose().position.x).toBe(2);
    expect(bot.getPose().position.y).toBe(0);
  });

  it('{0,0,E} → → ←', () => {
    const bot = new Bot();
    world.add(bot, new Pose(0, 0, Orientation.EAST));
    bot.forward().forward().backward();
    expect(bot.getPose().position.x).toBe(1);
    expect(bot.getPose().position.y).toBe(0);
  });


  it('{0,0,E} → → ↷ →', () => {
    const bot = new Bot();
    world.add(bot, new Pose(0, 0, Orientation.EAST));
    bot.forward().forward().right().forward();
    expect(bot.getPose().position.x).toBe(2);
    expect(bot.getPose().position.y).toBe(1);
    expect(bot.getPose().orientation).toBe(Orientation.SOUTH);
  });

  it('{0,0,E} → ↷ → → ↶ → →', () => {
    const bot = new Bot();
    world.add(bot, new Pose(0, 0, Orientation.EAST));
    bot.forward().right().forward().forward().left().forward().forward();
    expect(bot.getPose().position.x).toBe(3);
    expect(bot.getPose().position.y).toBe(2);
    expect(bot.getPose().orientation).toBe(Orientation.EAST);
  });

  it('{3,3,S} ↷ ↷', () => {
    const bot = new Bot();
    world.add(bot, new Pose(3, 3, Orientation.SOUTH));
    bot.right().right();
    expect(bot.getPose().position.x).toBe(3);
    expect(bot.getPose().position.y).toBe(3);
    expect(bot.getPose().orientation).toBe(Orientation.NORTH);
  });

});
