export class Person {
  #name: string
  private age: number
  constructor(name: string, age: number) {
    this.#name = name;
    this.age = age;
  }
}

export class Student extends Person {
  #name: string | string[];
  private age: number

  constructor(name: string, age: number | null) {
    super(name, age || 0)
    this.#name = name;
    this.age = age;
  }
}
