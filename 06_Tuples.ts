// Typed Arrays
// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.

// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, "Coding God was here"];

console.log(ourTuple);

// Even though we have a boolean, string, and number the order matters in our tuple and will throw an error.

// Readonly Tuple
// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [
  5,
  true,
  "The Real Coding God",
];
// throws error as it is readonly.
// ourReadonlyTuple.push("Coding God took a day off");

// Named Tuples
// Named tuples allow us to provide context for our values at each index.
const graph: [x: number, y: number] = [55.2, 41.3];

// Destructuring Tuples
// Since tuples are arrays we can also destructure them.
const someNums: [number, number] = [55.2, 41.3];
const [x, y] = someNums;
