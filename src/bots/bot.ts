import { Positionable } from '../positionable';
import { Actor } from '../actor';

export interface Bot extends Positionable, Actor {
  getName(): string;

  forward(): this;

  backward(): this;

  left(): this;

  right(): this;

  wait(): this;
}
