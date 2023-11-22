// TypeScript allows types to be defined separately from the variables that use them.

// Aliases and Interfaces allows types to be easily shared between different variables/objects.

// Type Aliases

// Type Aliases allow defining types with a custom name (an Alias).

// Type Aliases can be used for primitives like string or more complex types such as objects and arrays:

// Try creating a new Car using the alias provided
type Car = {
  year: number;
  type: string;
  model: string;
  price: number;
};

const car: Car = {
  year: 2001,
  type: "Toyota",
  model: "Corolla",
  price: 200,
};

console.log(car);
