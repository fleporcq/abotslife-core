import { World } from './world';
import { SequentialBot } from './bots/sequential-bot';

describe('World', () => {
  it('works', () => {
    const world = new World(10, 10);
    const bot = new SequentialBot('Wall-e');
    bot.writeToMemory('FORWARD');
    bot.loop(5);
    world.addBot(bot);
    world.fastForward(10);
    expect(world.getTickCount()).toBe(10);
    expect(bot._pose().position.x).toBe(5);
  });
});
