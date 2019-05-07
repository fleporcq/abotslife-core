import { Rom } from './rom';

export class ScriptRom implements Rom {

  private firmware = '';

  clear() {
    this.firmware = '';
  }

  flash(firmware: string) {
    this.firmware = firmware || '';
  }

  getFirmware(): string {
    return this.firmware;
  }
}
