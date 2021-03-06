import { DeplacementSystem } from './deplacement-system';
import { Orientation } from '../../../pose/orientation';
import { Pose } from '../../../pose/pose';
import { Grid } from '../../../grid';

let grid = null;

beforeAll(() => {
  grid = new Grid(100, 100);
});

describe('Deplacement system on a 100*100 grid', () => {

  it('should throw errors because grid and pose cannot be null', () => {
    const init1 = () => {
      const ds = new DeplacementSystem(null, new Pose(0, 0, Orientation.SOUTH));
    };
    expect(init1).toThrow('Grid can\'t be null');
    const init2 = () => {
      const ds = new DeplacementSystem(new Grid(10, 10), null);
    };
    expect(init2).toThrow('Initial pose can\'t be null');
  });


  it('{10,10,E} →', () => {
    const ds = new DeplacementSystem(grid, new Pose(10, 10, Orientation.EAST));
    ds.forward();
    expect(ds.getPose().position.x).toBe(11);
    expect(ds.getPose().position.y).toBe(10);
  });

  it('{10,10,S} →', () => {
    const ds = new DeplacementSystem(grid, new Pose(10, 10, Orientation.SOUTH));
    ds.forward();
    expect(ds.getPose().position.x).toBe(10);
    expect(ds.getPose().position.y).toBe(11);
  });

  it('{10,10,W} →', () => {
    const ds = new DeplacementSystem(grid, new Pose(10, 10, Orientation.WEST));
    ds.forward();
    expect(ds.getPose().position.x).toBe(9);
    expect(ds.getPose().position.y).toBe(10);
  });

  it('{10,10,N} →', () => {
    const ds = new DeplacementSystem(grid, new Pose(10, 10, Orientation.NORTH));
    ds.forward();
    expect(ds.getPose().position.x).toBe(10);
    expect(ds.getPose().position.y).toBe(9);
  });

  it('{10,10,E} ←', () => {
    const ds = new DeplacementSystem(grid, new Pose(10, 10, Orientation.EAST));
    ds.backward();
    expect(ds.getPose().position.x).toBe(9);
    expect(ds.getPose().position.y).toBe(10);
  });

  it('{10,10,S} ←', () => {
    const ds = new DeplacementSystem(grid, new Pose(10, 10, Orientation.SOUTH));
    ds.backward();
    expect(ds.getPose().position.x).toBe(10);
    expect(ds.getPose().position.y).toBe(9);
  });

  it('{10,10,W} ←', () => {
    const ds = new DeplacementSystem(grid, new Pose(10, 10, Orientation.WEST));
    ds.backward();
    expect(ds.getPose().position.x).toBe(11);
    expect(ds.getPose().position.y).toBe(10);
  });

  it('{10,10,N} ←', () => {
    const ds = new DeplacementSystem(grid, new Pose(10, 10, Orientation.NORTH));
    ds.backward();
    expect(ds.getPose().position.x).toBe(10);
    expect(ds.getPose().position.y).toBe(11);
  });

  it('{0,0,E} →', () => {
    const ds = new DeplacementSystem(grid, new Pose(0, 0, Orientation.EAST));
    ds.forward();
    expect(ds.getPose().position.x).toBe(1);
    expect(ds.getPose().position.y).toBe(0);
  });

  it('{0,0,E} ←', () => {
    const ds = new DeplacementSystem(grid, new Pose(0, 0, Orientation.EAST));
    ds.backward();
    expect(ds.getPose().position.x).toBe(0);
    expect(ds.getPose().position.y).toBe(0);
  });


  it('{99,0,E} ←', () => {
    const ds = new DeplacementSystem(grid, new Pose(99, 0, Orientation.EAST));
    ds.backward();
    expect(ds.getPose().position.x).toBe(98);
    expect(ds.getPose().position.y).toBe(0);
  });

  it('{98,0,E} →', () => {
    const ds = new DeplacementSystem(grid, new Pose(98, 0, Orientation.EAST));
    ds.forward();
    expect(ds.getPose().position.x).toBe(99);
    expect(ds.getPose().position.y).toBe(0);
  });

  it('{0,0,S} →', () => {
    const ds = new DeplacementSystem(grid, new Pose(0, 0, Orientation.SOUTH));
    ds.forward();
    expect(ds.getPose().position.x).toBe(0);
    expect(ds.getPose().position.y).toBe(1);
  });

  it('{0,0,S} ←', () => {
    const ds = new DeplacementSystem(grid, new Pose(0, 0, Orientation.SOUTH));
    ds.backward();
    expect(ds.getPose().position.x).toBe(0);
    expect(ds.getPose().position.y).toBe(0);
  });

  it('{0,99,S} ←', () => {
    const ds = new DeplacementSystem(grid, new Pose(0, 99, Orientation.SOUTH));
    ds.backward();
    expect(ds.getPose().position.x).toBe(0);
    expect(ds.getPose().position.y).toBe(98);
  });

  it('{0,98,S} →', () => {
    const ds = new DeplacementSystem(grid, new Pose(0, 98, Orientation.SOUTH));
    ds.forward();
    expect(ds.getPose().position.x).toBe(0);
    expect(ds.getPose().position.y).toBe(99);
  });

  it('{0,0,E} ↷', () => {
    const ds = new DeplacementSystem(grid, new Pose(0, 0, Orientation.EAST));
    ds.turnRight();
    expect(ds.getPose().orientation).toBe(Orientation.SOUTH);
  });

  it('{0,0,S} ↷', () => {
    const ds = new DeplacementSystem(grid, new Pose(0, 0, Orientation.SOUTH));
    ds.turnRight();
    expect(ds.getPose().orientation).toBe(Orientation.WEST);
  });

  it('{0,0,W} ↷', () => {
    const ds = new DeplacementSystem(grid, new Pose(0, 0, Orientation.WEST));
    ds.turnRight();
    expect(ds.getPose().orientation).toBe(Orientation.NORTH);
  });

  it('{0,0,N} ↷', () => {
    const ds = new DeplacementSystem(grid, new Pose(0, 0, Orientation.NORTH));
    ds.turnRight();
    expect(ds.getPose().orientation).toBe(Orientation.EAST);
  });

  it('{0,0,E} ↶', () => {
    const ds = new DeplacementSystem(grid, new Pose(0, 0, Orientation.EAST));
    ds.turnLeft();
    expect(ds.getPose().orientation).toBe(Orientation.NORTH);
  });

  it('{0,0,S} ↶', () => {
    const ds = new DeplacementSystem(grid, new Pose(0, 0, Orientation.SOUTH));
    ds.turnLeft();
    expect(ds.getPose().orientation).toBe(Orientation.EAST);
  });

  it('{0,0,W} ↶', () => {
    const ds = new DeplacementSystem(grid, new Pose(0, 0, Orientation.WEST));
    ds.turnLeft();
    expect(ds.getPose().orientation).toBe(Orientation.SOUTH);
  });

  it('{0,0,N} ↶', () => {
    const ds = new DeplacementSystem(grid, new Pose(0, 0, Orientation.NORTH));
    ds.turnLeft();
    expect(ds.getPose().orientation).toBe(Orientation.WEST);
  });
});
