export class Person {
  constructor(
    public name: string // <-
  ) {}
  logInfo() {
    return `Person:${this.name}`;
  }
}
