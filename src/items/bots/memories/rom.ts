export interface Rom {
  flash(firmware: string);

  clear();
}
