import { World } from './world';
import { SequentialBot } from './items/bots/sequential-bot';
import { Pose } from './pose/pose';
import { Orientation } from './pose/orientation';

describe('World', () => {

  it('works', () => {
    const world = new World(10, 10);
    const bot = new SequentialBot();
    bot.writeToMemory('FORWARD');
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

  it('works', () => {
    const world = new World(10, 10);
    const bot = new SequentialBot();
    bot.writeToMemory('FORWARD');
    bot.loop(5);
    world.add(bot, new Pose(0, 0, Orientation.EAST));
    world.fastForward(10);
    expect(world.getTickCount()).toBe(10);
    expect(bot.getPose().position.x).toBe(5);
  });

});
