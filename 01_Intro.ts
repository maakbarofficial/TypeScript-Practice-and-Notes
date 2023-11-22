// TypeScript is JavaScript with added syntax for types.

/* TypeScript is a syntactic superset of JavaScript which adds static typing.

This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types. */

let num: number = 10;
let str: string = "Ts";
let isLogged: boolean = true;

/* TypeScript uses compile time type checking. Which means it checks if the specified types match before running the code, not while running the code. */

// TypeScript is transpiled into JavaScript using a compiler.

// npm install typescript -g

// tsc <FileName>

// npm tsc --init // to init a tsconfig.json for configuration

/* {
  "include": ["src"],
  "compilerOptions": {
    "outDir": "./build"
  }
} */
