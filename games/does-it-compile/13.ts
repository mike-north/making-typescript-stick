export class Person {
  #name: string;
  constructor(name: string) {
    this.#name = name;
  }
}

function makeName(name: string | string[]): string {
  if (Array.isArray(name)) return name.join(" ");
  else return name;
}

export class Student extends Person {
  #name: string | string[];

  constructor(name: string | string[]) {
    super(makeName(name));
    this.#name = name;
  }
}
