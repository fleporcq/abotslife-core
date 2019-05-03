import { Memory } from './memory';

export class ScriptMemory implements Memory {

  private script = '';

  clear() {
    this.script = '';
  }

  write(program: string) {
    this.script = program || '';
  }

  getScript(): string {
    return this.script;
  }
}
