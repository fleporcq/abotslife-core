export interface Actor {
  hasNext(): boolean;

  next(): this;
}
