import { Rom } from './rom';
export declare class ScriptRom implements Rom {
    private firmware;
    clear(): void;
    flash(firmware: string): void;
    getFirmware(): string;
}
