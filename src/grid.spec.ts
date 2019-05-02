import { Grid } from './grid';
import { Position } from './pose/position';
import { Wall } from './items/wall';
import { Bot } from './items/bots/bot';

describe('Grid', () => {

  it('should initialize x and y to 0', () => {
    const init1 = () => {
      const grid = new Grid(null, null);
    };
    expect(init1).toThrow('The width and height must be integers greater or equal to one');

    const init2 = () => {
      const grid = new Grid(0, 0);
    };
    expect(init2).toThrow('The width and height must be integers greater or equal to one');

    const init3 = () => {
      const grid = new Grid(-1, -1);
    };
    expect(init3).toThrow('The width and height must be integers greater or equal to one');
  });

  it('should construct a grid', () => {
    const grid = new Grid(10, 20);
    expect(grid.getWidth()).toBe(10);
    expect(grid.getHeight()).toBe(20);
  });

  it('should throw an error because the position is out of bounds', () => {
    const grid = new Grid(10, 20);
    const add = () => {
      grid.add(null, new Position(11, 0));
    };
    expect(add).toThrow('(11,0) is not a valid position');
  });

  it('should throw an error because the position is already occuped', () => {
    const grid = new Grid(10, 20);
    const add = () => {
      const wallPosition = new Position(5, 5);
      const wall = new Wall();
      grid.add(wall, wallPosition);
      expect(grid.get(wallPosition)).toBe(wall);
      grid.add(new Bot(), wallPosition);
    };
    expect(add).toThrow('(5,5) is not a valid position');
  });
});
