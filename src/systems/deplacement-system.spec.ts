import { DeplacementSystem } from './deplacement-system';
import { Orientation } from '../pose/orientation';
import { Pose } from '../pose/pose';

describe('Deplacement system', () => {

  it('{10,10,E} →', () => {
    const ds = new DeplacementSystem(new Pose(10, 10, Orientation.EAST));
    ds.forward();
    expect(ds.getPose().position.x).toBe(11);
    expect(ds.getPose().position.y).toBe(10);
  });

  it('{10,10,S} →', () => {
    const ds = new DeplacementSystem(new Pose(10, 10, Orientation.SOUTH));
    ds.forward();
    expect(ds.getPose().position.x).toBe(10);
    expect(ds.getPose().position.y).toBe(11);
  });

  it('{10,10,W} →', () => {
    const ds = new DeplacementSystem(new Pose(10, 10, Orientation.WEST));
    ds.forward();
    expect(ds.getPose().position.x).toBe(9);
    expect(ds.getPose().position.y).toBe(10);
  });

  it('{10,10,N} →', () => {
    const ds = new DeplacementSystem(new Pose(10, 10, Orientation.NORTH));
    ds.forward();
    expect(ds.getPose().position.x).toBe(10);
    expect(ds.getPose().position.y).toBe(9);
  });

  it('{10,10,E} ←', () => {
    const ds = new DeplacementSystem(new Pose(10, 10, Orientation.EAST));
    ds.backward();
    expect(ds.getPose().position.x).toBe(9);
    expect(ds.getPose().position.y).toBe(10);
  });

  it('{10,10,S} ←', () => {
    const ds = new DeplacementSystem(new Pose(10, 10, Orientation.SOUTH));
    ds.backward();
    expect(ds.getPose().position.x).toBe(10);
    expect(ds.getPose().position.y).toBe(9);
  });

  it('{10,10,W} ←', () => {
    const ds = new DeplacementSystem(new Pose(10, 10, Orientation.WEST));
    ds.backward();
    expect(ds.getPose().position.x).toBe(11);
    expect(ds.getPose().position.y).toBe(10);
  });

  it('{10,10,N} ←', () => {
    const ds = new DeplacementSystem(new Pose(10, 10, Orientation.NORTH));
    ds.backward();
    expect(ds.getPose().position.x).toBe(10);
    expect(ds.getPose().position.y).toBe(11);
  });

  it('{0,0,E} ↷', () => {
    const ds = new DeplacementSystem(new Pose(0, 0, Orientation.EAST));
    ds.right();
    expect(ds.getPose().orientation).toBe(Orientation.SOUTH);
  });

  it('{0,0,S} ↷', () => {
    const ds = new DeplacementSystem(new Pose(0, 0, Orientation.SOUTH));
    ds.right();
    expect(ds.getPose().orientation).toBe(Orientation.WEST);
  });

  it('{0,0,W} ↷', () => {
    const ds = new DeplacementSystem(new Pose(0, 0, Orientation.WEST));
    ds.right();
    expect(ds.getPose().orientation).toBe(Orientation.NORTH);
  });

  it('{0,0,N} ↷', () => {
    const ds = new DeplacementSystem(new Pose(0, 0, Orientation.NORTH));
    ds.right();
    expect(ds.getPose().orientation).toBe(Orientation.EAST);
  });

  it('{0,0,E} ↶', () => {
    const ds = new DeplacementSystem(new Pose(0, 0, Orientation.EAST));
    ds.left();
    expect(ds.getPose().orientation).toBe(Orientation.NORTH);
  });

  it('{0,0,S} ↶', () => {
    const ds = new DeplacementSystem(new Pose(0, 0, Orientation.SOUTH));
    ds.left();
    expect(ds.getPose().orientation).toBe(Orientation.EAST);
  });

  it('{0,0,W} ↶', () => {
    const ds = new DeplacementSystem(new Pose(0, 0, Orientation.WEST));
    ds.left();
    expect(ds.getPose().orientation).toBe(Orientation.SOUTH);
  });

  it('{0,0,N} ↶', () => {
    const ds = new DeplacementSystem(new Pose(0, 0, Orientation.NORTH));
    ds.left();
    expect(ds.getPose().orientation).toBe(Orientation.WEST);
  });
});
