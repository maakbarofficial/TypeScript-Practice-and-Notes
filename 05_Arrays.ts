// TypeScript has a specific syntax for typing arrays.
const students: string[] = [];
students.push("Ali", "Akbar");
console.log(students);
// students.push(8); // will through an error
console.log(students);

// The readonly keyword can prevent arrays from being changed.
const programmers: readonly string[] = ["Akbar"];
// programmers.push("Ali");
// console.log(programmers);

// TypeScript can infer the type of an array if it has values.
const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// comment line below out to see the successful assignment
// numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
let head: number = numbers[0]; // no error
