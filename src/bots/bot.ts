import { Pose } from '../pose/pose';
import { World } from '../world';

export interface Bot {
  getName(): string;

  forward(): this;

  backward(): this;

  left(): this;

  right(): this;

  wait(): this;

  _pose();

  _putOnWorld(world: World, pose: Pose);

  hasNext(): boolean;

  next(): this;
}
