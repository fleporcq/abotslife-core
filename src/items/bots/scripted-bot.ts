import { Bot } from './bot';
import { Actor } from '../actor';
import { ScriptMemory } from './memories/script-memory';
import * as ts from 'typescript';

export class ScriptedBot extends Bot implements Actor {

  private memory: ScriptMemory;

  constructor() {
    super();
    this.memory = new ScriptMemory();
  }

  public writeToMemory(script: string) {
    if (script.includes('this')) {
      throw new Error('The script cannot contain \'this\' keyword');
    }
    this.memory.write(script);
    return this;
  }

  public clearMemory() {
    this.memory.clear();
    return this;
  }

  public hasNext(): boolean {
    return true;
  }

  public next(): this {
    this.execute(this.memory.getScript());
    return this;
  }

  private execute(script: string) {
    'use strict';
    let moveCount = 0;
    const forward = () => {
      moveCount++;
      this.forward();
    };
    const backward = () => {
      moveCount++;
      this.backward();
    };
    const left = () => {
      moveCount++;
      this.left();
    };
    const right = () => {
      moveCount++;
      this.right();
    };
    const wait = () => {
      moveCount++;
      this.wait();
    };

    eval(ts.transpile(script));

    if (moveCount > 1) {
      throw new Error('The bot cannot move more than once');
    }
  }
}
