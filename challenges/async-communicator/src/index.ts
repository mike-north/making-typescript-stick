import { expectType } from 'tsd';

export type WrapForPenpal<Methods extends Record<string, (...args: any[]) => any>> = {
  [K in keyof Methods & string]: (...args: Parameters<Methods[K]>) => Promise<ReturnType<Methods[K]>>;
}

/**
 * Test Scenario
 */
const methods = {
  add(a: number, b: number): number {
    return a + b;
  },
  subtract(a: number, b: number): number {
    return a - b;
  }
}
const asyncMethods: WrapForPenpal<typeof methods> = {} as any;

let addPromise = asyncMethods.add(1, 2);
expectType<Promise<number>>(addPromise);

let subtractPromise = asyncMethods.subtract(1, 2);
expectType<Promise<number>>(subtractPromise);

