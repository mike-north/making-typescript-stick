interface Color {
  red: number;
  green: number;
  blue: number;
}

export function printColor(color: Color) {
  // ... //
}

printColor({
  red: 255,
  green: 0,
  blue: 0,
  alpha: 0.4,
});
