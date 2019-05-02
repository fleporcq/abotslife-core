import { Pose } from './pose/pose';
import { World } from './world';

export interface Positionable {
  putOnWorld(world: World, pose: Pose);

  getPose(): Pose;
}
