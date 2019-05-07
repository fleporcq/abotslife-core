export interface Rom {
    flash(firmware: string): any;
    clear(): any;
}
