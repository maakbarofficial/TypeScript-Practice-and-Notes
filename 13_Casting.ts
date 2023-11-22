// There are times when working with types where it's necessary to override the type of a variable, such as when incorrect types are provided by a library.

// Casting is the process of overriding a type.

// Casting with as

let x: unknown = "hello";
console.log((x as string).length);

/* 
Casting doesn't actually change the type of the data within the variable, for example the following code will not work as expected since the variable x is still holds a number.
*/

/* 
TypeScript will still attempt to typecheck casts to prevent casts that don't seem correct, for example the following will throw a type error since TypeScript knows casting a string to a number doesn't makes sense without converting the data:
*/

// console.log((4 as string).length); // Error: Conversion of type 'number' to type 'string' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.

// Casting with <>
// Using <> works the same as casting with as
let str: unknown = "helloTypeScript";
console.log((<string>str).length);

// This type of casting will not work with TSX, such as when working on React files.

// Force casting
// To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.

let z = "hello";
console.log((z as unknown as number).length); // x is not actually a number so this will return undefined
