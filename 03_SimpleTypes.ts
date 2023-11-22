/* 
There are three main primitives in JavaScript and TypeScript.

boolean - true or false values
number - whole numbers and floating point values
string - text values like "TypeScript Rocks"
There are also 2 less common primitives used in later versions of Javascript and TypeScript.

bigint - whole numbers and floating point values, but allows larger negative and positive numbers than the number type.
symbol are used to create a globally unique identifier.
*/

/* 
When creating a variable, there are two main ways TypeScript assigns a type:

Explicit
Implicit
*/

let firstName: string = "Akbar"; // Explicit - writing out the type
let lastName = "Ali"; //TypeScript will "guess" the type, based on the assigned value

// Having TypeScript "guess" the type of a value is called infer
// This behavior can be disabled by enabling noImplicitAny as an option in a TypeScript's project tsconfig.json. That is a JSON config file for customizing how some of TypeScript behaves.

let stringranadom: string = "Some String"; // type string
stringranadom = 33; // attempts to re-assign the value to a different type

// JavaScript will not throw an error for mismatched types.

let a: number = 10;
let b: string = "Hello String";
let c: boolean = false;
let d: bigint = 9007199254740991n;
