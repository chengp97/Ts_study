// Type aliases
type Age = number;
const age: Age = 11

// Type Arrays

// Arrays as lists
let arr: number[] = [1, 2, 3]

let arr2: Array<number> = [1, 2, 3]

// Array as Tuples
let point: [number, number] = [7, 5];

const entries = Object.entries({ a: 1, b: 2 });

// Functions types
const func = (num: number) => String(num);

function stringify123(callback?: (num: number) => string) {
  if (callback === undefined) {
    callback = String;
  }
  return callback(123); // (A)
}

// Union types
let maybeNumber: null | number = null;
maybeNumber = 123;

let myNumber
myNumber = 123;