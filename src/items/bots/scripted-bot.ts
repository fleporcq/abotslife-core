import { Bot } from './bot';
import { Actor } from '../actor';
import { ScriptMemory } from './memories/script-memory';
import { SensorType } from './sensors/sensor-type';
import { Sensor } from './sensors/sensor';
import { SensorFactory } from './sensors/sensor-factory';

export class ScriptedBot extends Bot implements Actor {

  private memory: ScriptMemory;

  private sensors = new Map<SensorType, Sensor>();

  constructor() {
    super();
    this.memory = new ScriptMemory();
  }

  public writeToMemory(script: string) {
    if (script.includes('this')) {
      throw new Error('The script cannot contain \'this\' keyword');
    }
    this.memory.write(script);
    return this;
  }

  public clearMemory() {
    this.memory.clear();
    return this;
  }

  public hasNext(): boolean {
    return true;
  }

  public next(): this {
    this.execute(this.memory.getScript());
    return this;
  }

  public addSensor(type: SensorType) {
    if (this.hasSensor(type)) {
      throw new Error('The bot has already the ' + type + ' sensor');
    }
    const sensor = SensorFactory.build(type, this);
    this.sensors.set(type, sensor);
  }

  public hasSensor(type: SensorType) {
    return this.sensors.has(type);
  }

  public getSensor(type: SensorType): Sensor {
    if (!this.hasSensor(type)) {
      throw new Error('The bot has not the ' + type + ' sensor');
    }
    return this.sensors.get(type) || null;
  }

  private execute(script: string) {
    'use strict';
    let moveCount = 0;
    const forward = () => {
      moveCount++;
      this.forward();
    };
    const backward = () => {
      moveCount++;
      this.backward();
    };
    const turnLeft = () => {
      moveCount++;
      this.turnLeft();
    };
    const turnRight = () => {
      moveCount++;
      this.turnRight();
    };
    const turnBack = () => {
      moveCount++;
      this.turnBack();
    };
    const wait = () => {
      moveCount++;
      this.wait();
    };

    const sensor = (type: string): Sensor => {
      const sensorType = SensorType[type.toUpperCase()];
      if (sensorType === undefined) {
        throw new Error('The ' + type + ' sensor is unknown');
      }
      return this.getSensor(sensorType);
    };

    eval(script);

    if (moveCount > 1) {
      throw new Error('The bot cannot move more than once');
    }
  }
}
