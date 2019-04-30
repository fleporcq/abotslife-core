import { Grid } from '../grid';
import { Pose } from '../pose/pose';

export interface Bot {
  getName(): string;

  forward(): this;

  backward(): this;

  left(): this;

  right(): this;

  wait(): this;

  _pose();

  _putOnGrid(grid: Grid, pose: Pose);

  hasNext(): boolean;

  next(): this;
}
