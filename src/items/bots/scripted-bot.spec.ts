import { ScriptedBot } from './scripted-bot';
import { World } from '../../world';
import { Pose } from '../../pose/pose';
import { Orientation } from '../../pose/orientation';

describe('Sequential bot', () => {
  let world;

  beforeEach(() => {
    world = new World(10, 10);
  });

  it('{3,3,E} → →', () => {
    const bot = new ScriptedBot();
    world.add(bot, new Pose(3, 3, Orientation.EAST));
    bot.writeToMemory('forward();');
    world.fastForward(2);
    expect(bot.getPose().position.x).toBe(5);
  });

  it('should throw an error because the script cannot contain this', () => {
    const bot = new ScriptedBot();
    world.add(bot, new Pose(0, 0, Orientation.EAST));
    const fail = () => {
      bot.writeToMemory('this.forward();');
    };
    expect(fail).toThrow('The script cannot contain \'this\' keyword');
  });

  it('should throw an error because the bot cannot move more than once', () => {
    const bot = new ScriptedBot();
    world.add(bot, new Pose(0, 0, Orientation.EAST));
    bot.writeToMemory('forward();backward();');
    const fail = () => {
      world.next();
    };
    expect(fail).toThrow('The bot cannot move more than once');
  });

});
