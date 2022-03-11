type Color = {
  red: number;
  green: number;
  blue: number;
};

export class ColorValue implements Color {
  constructor(
    public red: number,
    public green: number,
    public blue: number
  ) {}
}
