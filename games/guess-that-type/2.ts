export class Person {
  constructor(public name: string) {}
}
class Library {
  librarians: Person[] = [];
}

const localLibrary = Library;
// ^?
const otherLibrary = new Library();
// ^?
