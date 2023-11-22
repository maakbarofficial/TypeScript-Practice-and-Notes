// TypeScript has special types that may not refer to any specific type of data.

// any is a type that disables type checking and effectively allows all types to be used.

let v: any = true;
v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type

// unknown is a similar, but safer alternative to any
let n: unknown = true;

// never effectively throws an error whenever it is defined.
let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.
// never is rarely used, especially by itself, its primary use is in advanced generics.

// undefined & null
// undefined and null are types that refer to the JavaScript primitives undefined and null respectively.
let y: undefined = undefined;
let z: null = null;

// These types don't have much use unless strictNullChecks is enabled in the tsconfig.json file.
