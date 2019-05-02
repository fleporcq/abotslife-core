import { Position } from './position';

describe('Position', () => {

  it('should initialize x and y to 0', () => {
    const position = new Position();
    expect(position).toEqual({ x: 0, y: 0 });
  });

  it('should return a string', () => {
    const position = new Position(1, 2);
    expect(position + '').toBe('(1,2)');
  });

});
