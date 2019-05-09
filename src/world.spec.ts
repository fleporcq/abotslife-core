import { World } from './world';
import { SequentialBot } from './items/bots/sequential-bot';
import { Pose } from './pose/pose';
import { Orientation } from './pose/orientation';
import { Wall } from './items/wall';
import { Position } from './pose/position';
import { ItemType } from './items/item-type';

describe('World', () => {

  it('should move the bot', () => {
    const world = new World(10, 10);
    const bot = new SequentialBot();
    bot.flash('FORWARD');
    bot.loop(5);
    world.add(bot, new Pose(0, 0, Orientation.EAST));
    world.fastForward(10);
    expect(world.getTickCount()).toBe(10);
    expect(bot.getPose().position.x).toBe(5);
  });

  it('should throw an error because count is not an integer greater than one', () => {
    const world = new World(10, 20);

    const fastForward = () => {
      world.fastForward(null);
    };
    expect(fastForward).toThrow('count must be an integer greater or equal to 1');

    const fastForward2 = () => {
      world.fastForward(0);
    };
    expect(fastForward2).toThrow('count must be an integer greater or equal to 1');

    const fastForward3 = () => {
      world.fastForward(-1);
    };
    expect(fastForward3).toThrow('count must be an integer greater or equal to 1');
  });

  it('should throw an error because the next position is already used', () => {
    const world = new World(10, 10);
    const bot = new SequentialBot();
    bot.flash('FORWARD');
    bot.loop(5);
    world.add(bot, new Pose(0, 0, Orientation.EAST));
    world.add(new Wall(), new Pose(5, 0));
    world.fastForward(10);
    expect(world.getTickCount()).toBe(10);
    expect(bot.getPose().position.x).toBe(4);
  });

  it('should be cloned', () => {
    const world = new World(10, 10);
    const bot = new SequentialBot();
    bot.flash('FORWARD').loop();
    world.add(bot, new Pose(0, 0, Orientation.EAST));
    const worldFuture = world.clone();

    expect(worldFuture.getGrid().get(new Position(0, 0)).getType()).toEqual(ItemType.BOT);
    expect(worldFuture.getGrid().get(new Position(3, 0))).toBeNull();
    worldFuture.fastForward(3);

    expect(bot.getPose().position.x).toBe(0);
    expect(worldFuture.getGrid().get(new Position(0, 0))).toBeNull();
    expect(worldFuture.getGrid().get(new Position(3, 0)).getType()).toEqual(ItemType.BOT);

    expect(world.getGrid().get(new Position(0, 0)).getType()).toEqual(ItemType.BOT);
    expect(world.getGrid().get(new Position(3, 0))).toBeNull();
  });

});
