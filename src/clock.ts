export class Clock {

  private timeInterval: number;

  private interval: number;

  private callback: () => void;

  private tickCount = 0;

  constructor(callback?: () => void, timeInterval: number = 1000) {
    if (callback != null) {
      this.setCallBack(callback, timeInterval);
    }
  }

  public setCallBack(callback: () => void, timeInterval: number = 1000) {
    this.callback = callback;
    this.setTimeInterval(timeInterval);
  }

  public tick() {
    this.tickCount++;
  }

  public getTickCount(): number {
    return this.tickCount;
  }

  public setTimeInterval(timeInterval: number) {
    if (!Number.isInteger(timeInterval) || timeInterval < 500) {
      throw new Error('timeInterval must be an integer greater or equal to 500');
    }
    this.timeInterval = timeInterval;
  }

  public start(): void {
    this.callback();
    this.interval = setInterval(() => {
      this.callback();
    }, this.timeInterval);
  }

  public stop(): void {
    clearInterval(this.interval);
    this.interval = null;
  }

  public isRunning() {
    return this.interval !== null;
  }
}
