// TypeScript Objects

const car: { type: string; model: string; year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009,
};

console.log(car);

// TypeScript can infer the types of properties based on their values.
const someCar = {
  type: "Toyota",
};
someCar.type = "Ford"; // no error
// someCar.type = 2; // Error: Type 'number' is not assignable to type 'string'.

// Optional properties are properties that don't have to be defined in the object definition.

/* 
const car: { type: string, mileage: number } = { // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
  type: "Toyota",
};
car.mileage = 2000;
*/

const cars: { type: string; mileage?: number } = {
  // no error
  type: "Toyota",
};
cars.mileage = 2000;

// Index signatures can be used for objects without a defined list of properties.
const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.
