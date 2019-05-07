import { Orientation } from '../../pose/orientation';
import { Pose } from '../../pose/pose';
import { SequentialBot } from './sequential-bot';
import { World } from '../../world';

describe('Sequential bot', () => {

  let world;

  beforeEach(() => {
    world = new World(10, 10);
  });

  it('{0,0,E} → →', () => {
    const bot = new SequentialBot();
    world.add(bot, new Pose(0, 0, Orientation.EAST));
    bot.flash('FORWARD FORWARD');
    while (bot.hasNext()) {
      bot.next();
    }
    expect(bot.getPose().position.x).toBe(2);
    expect(bot.getPose().position.y).toBe(0);
  });

  it('{0,0,E} → → ←', () => {
    const bot = new SequentialBot();
    world.add(bot, new Pose(0, 0, Orientation.EAST));
    bot.flash('FORWARD FORWARD BACKWARD');
    while (bot.hasNext()) {
      bot.next();
    }
    expect(bot.getPose().position.x).toBe(1);
    expect(bot.getPose().position.y).toBe(0);
  });

  it('{0,0,E} → → ↷ →', () => {
    const bot = new SequentialBot();
    world.add(bot, new Pose(0, 0, Orientation.EAST));
    bot.flash('FORWARD FORWARD TURN_RIGHT FORWARD');
    while (bot.hasNext()) {
      bot.next();
    }
    expect(bot.getPose().position.x).toBe(2);
    expect(bot.getPose().position.y).toBe(1);
    expect(bot.getPose().orientation).toBe(Orientation.SOUTH);
  });

  it('{0,0,E} → ↷ → → ↶ → →', () => {
    const bot = new SequentialBot();
    world.add(bot, new Pose(0, 0, Orientation.EAST));
    bot.flash('FORWARD TURN_RIGHT FORWARD FORWARD TURN_LEFT FORWARD FORWARD');
    while (bot.hasNext()) {
      bot.next();
    }
    expect(bot.getPose().position.x).toBe(3);
    expect(bot.getPose().position.y).toBe(2);
    expect(bot.getPose().orientation).toBe(Orientation.EAST);
  });

  it('{3,3,S} ↷ ↷', () => {
    const bot = new SequentialBot();
    world.add(bot, new Pose(3, 3, Orientation.SOUTH));
    bot.flash('TURN_RIGHT TURN_RIGHT');
    while (bot.hasNext()) {
      bot.next();
    }
    expect(bot.getPose().position.x).toBe(3);
    expect(bot.getPose().position.y).toBe(3);
    expect(bot.getPose().orientation).toBe(Orientation.NORTH);
  });

  it('{0,0,E} loop → ↷ → ↶', () => {
    const bot = new SequentialBot();
    world.add(bot, new Pose(0, 0, Orientation.EAST));
    bot.flash('FORWARD TURN_RIGHT FORWARD TURN_LEFT');
    bot.loop();
    while (bot.hasNext()) {
      bot.next();
      if (bot.getLoopCount() === 3) {
        break;
      }
    }
    expect(bot.getPose().position.x).toBe(3);
    expect(bot.getPose().position.y).toBe(3);
  });

  it('{0,0,E} loop 4 times → ↷ → ↶', () => {
    const bot = new SequentialBot();
    world.add(bot, new Pose(0, 0, Orientation.EAST));
    bot.flash('FORWARD TURN_RIGHT FORWARD TURN_LEFT');
    bot.loop(4);
    while (bot.hasNext()) {
      bot.next();
    }
    expect(bot.getPose().position.x).toBe(4);
    expect(bot.getPose().position.y).toBe(4);
  });

  it('{0,0,E} → ⭙ →', () => {
    const bot = new SequentialBot();
    world.add(bot, new Pose(0, 0, Orientation.EAST));
    bot.flash('FORWARD WAIT FORWARD');
    while (bot.hasNext()) {
      bot.next();
    }
    expect(bot.getPose().position.x).toBe(2);
    expect(bot.getPose().position.y).toBe(0);
  });

  it('clear rom', () => {
    const bot = new SequentialBot();
    world.add(bot, new Pose(0, 0, Orientation.EAST));
    bot.flash('FORWARD');
    bot.clear();
    while (bot.hasNext()) {
      bot.next();
    }
    expect(bot.getPose().position.x).toBe(0);
    expect(bot.getPose().position.y).toBe(0);
  });

});
