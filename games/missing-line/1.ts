const p1 = Promise.resolve(42);
const p2 = Promise.resolve("Live, the universe and everything");

type UnwrapPromise<T> =
  T extends Promise<infer P> ? P : never /// BLANK

type t1 = UnwrapPromise<typeof p1> // string
type t2 = UnwrapPromise<typeof p2> // number
