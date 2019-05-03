import { Sensor } from './sensor';
import { SensorType } from './sensor-type';
import { ScriptedBot } from '../scripted-bot';
import { Orientation } from '../../../pose/orientation';
import { Position } from '../../../pose/position';

export class DistanceSensor extends Sensor {

  private maxRange: number;

  constructor(bot: ScriptedBot, maxRange: number = 5) {
    super(SensorType.DISTANCE, bot);
    this.maxRange = maxRange;
  }

  public measure(): number {
    const botX = this.bot.getPose().position.x;
    const botY = this.bot.getPose().position.y;
    const botOrientation = this.bot.getPose().orientation;
    const grid = this.bot.getWorld().getGrid();
    for (let d = 1; d <= this.maxRange + 1; d++) {
      let nextPosition;
      switch (botOrientation) {
        case Orientation.EAST:
          nextPosition = new Position(botX + d, botY);
          break;
        case Orientation.SOUTH:
          nextPosition = new Position(botX, botY + d);
          break;
        case Orientation.WEST:
          nextPosition = new Position(botX - d, botY);
          break;
        case Orientation.NORTH:
          nextPosition = new Position(botX, botY - d);
          break;
      }
      if (!grid.isValidPosition(nextPosition)) {
        return d - 1;
      }
    }
    return Infinity;
  }

}
