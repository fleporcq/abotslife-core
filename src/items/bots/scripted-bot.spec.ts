import { ScriptedBot } from './scripted-bot';
import { World } from '../../world';
import { Pose } from '../../pose/pose';
import { Orientation } from '../../pose/orientation';
import { SensorType } from './sensors/sensor-type';
import { Wall } from '../wall';

describe('Scripted bot', () => {
  let world;

  beforeEach(() => {
    world = new World(10, 10);
  });

  it('{3,3,E} → →', () => {
    const bot = new ScriptedBot();
    world.add(bot, new Pose(3, 3, Orientation.EAST));
    bot.flash('forward();');
    world.fastForward(2);
    expect(bot.getPose().position.x).toBe(5);
  });

  it('should throw an error because the firmware cannot contain this', () => {
    const bot = new ScriptedBot();
    world.add(bot, new Pose(0, 0, Orientation.EAST));
    const fail = () => {
      bot.flash('this.forward();');
    };
    expect(fail).toThrow('The firmware cannot contain \'this\' keyword');
  });

  it('should throw an error because the bot cannot move more than once', () => {
    const bot = new ScriptedBot();
    world.add(bot, new Pose(0, 0, Orientation.EAST));
    bot.flash('forward();backward();');
    const fail = () => {
      world.next();
    };
    expect(fail).toThrow('The bot cannot move more than once');
  });

  it('get sensor', () => {
    const bot = new ScriptedBot();
    bot.addSensor(SensorType.SHOCK);
    expect(bot.getSensor(SensorType.SHOCK).getType()).toBe(SensorType.SHOCK);
  });

  it('should throw an error because has already the sensor', () => {
    const bot = new ScriptedBot();
    bot.addSensor(SensorType.SHOCK);
    const fail = () => {
      bot.addSensor(SensorType.SHOCK);
    };
    expect(fail).toThrow('The bot has already the shock sensor');
  });

  it('should throw an error because has not the sensor', () => {
    const bot = new ScriptedBot();
    const fail = () => {
      bot.getSensor(SensorType.SHOCK);
    };
    expect(fail).toThrow('The bot has not the shock sensor');
  });

  it('should throw an error because the stuff sensor is unknown', () => {
    const bot = new ScriptedBot();
    world.add(bot, new Pose(0, 0, Orientation.EAST));
    bot.flash('sensor(\'stuff\');');
    const fail = () => {
      world.next();
    };
    expect(fail).toThrow('The stuff sensor is unknown');
  });

  it('should throw an error because the sensor is on a bot not aware of the world', () => {
    const bot = new ScriptedBot();
    bot.addSensor(SensorType.SHOCK);
    bot.flash('sensor(\'shock\').measure();');
    const fail = () => {
      bot.next();
    };
    expect(fail).toThrow('The item is not yet world aware');
  });

  it('should go to the right after shock', () => {
    const bot = new ScriptedBot();
    bot.addSensor(SensorType.SHOCK);
    world.add(bot, new Pose(0, 0, Orientation.EAST));
    bot.flash(`
      if(sensor('shock').measure()){
        turnRight();
      } else {
        forward();
      }
    `);
    world.fastForward(15);
    expect(bot.getPose()).toEqual({ position: { x: 9, y: 4 }, orientation: 'SOUTH' });
  });

  it('should go to the right if south', () => {
    const bot = new ScriptedBot();
    bot.addSensor(SensorType.COMPASS);
    world.add(bot, new Pose(0, 0, Orientation.SOUTH));
    bot.flash(`
      if(sensor('compass').measure() == 'SOUTH'){
        turnRight();
      }
    `);
    world.next();
    expect(bot.getPose()).toEqual({ position: { x: 0, y: 0 }, orientation: 'WEST' });
    world.next();
    expect(bot.getPose()).toEqual({ position: { x: 0, y: 0 }, orientation: 'WEST' });
  });

  it('should turn back after shock', () => {
    const bot = new ScriptedBot();
    bot.addSensor(SensorType.SHOCK);
    world.add(bot, new Pose(0, 0, Orientation.EAST));
    world.add(new Wall(), new Pose(5, 0));
    bot.flash(`
      if(sensor('shock').measure()){
        turnBack();
      } else {
        forward();
      }
    `);
    world.fastForward(8);
    expect(bot.getPose()).toEqual({ position: { x: 2, y: 0 }, orientation: 'WEST' });
  });

  it('should toggle backward/forward after shock', () => {
    const bot = new ScriptedBot();
    bot.addSensor(SensorType.SHOCK);
    world.add(bot, new Pose(0, 0, Orientation.EAST));
    world.add(new Wall(), new Pose(5, 0));
    bot.flash(`
      let goToFront = false
      if(sensor('shock').measure()){
        goToFront =! goToFront;
      }
      if (goToFront) {
        forward();
      } else {
        backward();
      }
    `);
    world.fastForward(8);
    expect(bot.getPose()).toEqual({ position: { x: 1, y: 0 }, orientation: 'EAST' });
  });

  it('should measure a distance of 3', () => {
    const bot = new ScriptedBot();
    bot.addSensor(SensorType.DISTANCE);
    world.add(bot, new Pose(1, 0, Orientation.EAST));
    world.add(new Wall(), new Pose(5, 0));
    expect(bot.getSensor(SensorType.DISTANCE).measure()).toBe(3);
  });

  it('should measure a distance of 0', () => {
    const bot = new ScriptedBot();
    bot.addSensor(SensorType.DISTANCE);
    world.add(bot, new Pose(1, 0, Orientation.EAST));
    world.add(new Wall(), new Pose(2, 0));
    expect(bot.getSensor(SensorType.DISTANCE).measure()).toBe(0);
  });

  it('should measure a distance of 5', () => {
    const bot = new ScriptedBot();
    bot.addSensor(SensorType.DISTANCE);
    world.add(bot, new Pose(4, 0, Orientation.EAST));
    expect(bot.getSensor(SensorType.DISTANCE).measure()).toBe(5);
  });

  it('should measure a distance of infinity', () => {
    const bot = new ScriptedBot();
    bot.addSensor(SensorType.DISTANCE);
    world.add(bot, new Pose(0, 0, Orientation.EAST));
    expect(bot.getSensor(SensorType.DISTANCE).measure()).toBe(Infinity);
  });

  it('should retrieve its position', () => {
    const bot = new ScriptedBot();
    bot.addSensor(SensorType.POSITION);
    world.add(bot, new Pose(1, 3, Orientation.EAST));
    expect(bot.getSensor(SensorType.POSITION).measure()).toEqual({ x: 1, y: 3 });
  });
});
