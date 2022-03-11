function getValue(): [number] | Promise<number> {
  if (Math.random() > 0.5) return [42];
  else return Promise.resolve(42);
}

async function main() {
  const resolved = await getValue();
  ///    ^?
}
