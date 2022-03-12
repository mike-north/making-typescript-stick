export type ArrayWrap<T> = T extends any[] ? T : T[];

const x: ArrayWrap<string[]> = ["foo"]; // string[]
const y: ArrayWrap<number> = [4]; // number[]


interface Person {
  name: string;
  age: number;
  height?: number;
}

type MyType = Omit<Person, 'age'>;
let val: MyType = { name: 'Mike' };
val.age // ❌ Property 'age' does not exist on type 'MyType'.
val.height // number | undefined;
val.name // string
