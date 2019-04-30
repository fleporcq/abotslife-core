import { Clock } from './clock';

describe('Clock', () => {


  beforeAll(function () {
    jest.useFakeTimers();
  });

  it('should call function 5 times', () => {
    const clock = new Clock(() => {
      clock.tick();
      if (clock.getTickCount() === 5) {
        clock.stop();
        expect(clock.isRunning()).toBeFalsy();
      }
    });

    clock.start();
    expect(clock.isRunning()).toBeTruthy();
    jest.runAllTimers();
    expect(clock.getTickCount()).toBe(5);
  });
});
