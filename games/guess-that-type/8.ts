export class Person {
  static species = 'Homo Sapien'
  constructor(public name: string) {}
}

const p = new Person('mike')
let x: keyof typeof Person
//  ^?
let y: keyof typeof p
//  ^?
