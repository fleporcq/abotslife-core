import { Pose } from './pose';
import { Orientation } from './orientation';

describe('Pose', () => {

  it('should initialize x and y to 0', () => {
    const position = new Pose(2, 3, Orientation.SOUTH);
    expect(position).toEqual({ position: { x: 2, y: 3 }, orientation: 'SOUTH' });
  });

  it('should return a string', () => {
    const position = new Pose(2, 3, Orientation.SOUTH);
    expect(position + '').toBe('(2,3) SOUTH');
  });

});
