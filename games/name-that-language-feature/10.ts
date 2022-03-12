interface Person {
  name: string;
  age: string;
}

export type NullableProps<T> = {
  [K in keyof T]: T[K] | null;
  //  ^?
};

let x: NullableProps<Person> = { age: null, name: null };
