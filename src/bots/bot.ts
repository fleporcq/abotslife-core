import { Grid } from '../grid';
import { Position } from '../position';
import { Orientation } from '../orientation';

export interface Bot {
  getName(): string;

  forward(): this;

  backward(): this;

  left(): this;

  right(): this;

  _position();

  _orientation();

  _putOnGrid(grid: Grid, position: Position, orientation: Orientation);

  hasNext(): boolean;

  next(): this;
}
