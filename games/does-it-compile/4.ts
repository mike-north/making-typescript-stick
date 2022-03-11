abstract class Person {
  public abstract name: string
}

export class Student extends Person {
  public name: string | string[] = ['Mike North']
}
