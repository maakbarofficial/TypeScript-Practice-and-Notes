// An enum is a special "class" that represents a group of constants (unchangeable variables).

// Enums come in two flavors string and numeric. Lets start with numeric.

// Numeric Enums - Default

enum CardinalDirections {
  North,
  East,
  South,
  West,
}
let n = CardinalDirections.North;
let e = CardinalDirections.East;
let s = CardinalDirections.South;
let w = CardinalDirections.West;

// logs 0
console.log(e);
// throws error as 'North' is not a valid enum
// currentDirection = "North"; // Error: "North" is not assignable to type 'CardinalDirections'.

// Numeric Enums - Initialized
enum CardinalDirections {
  North = 1,
  East,
  South,
  West,
}
// logs 1
console.log(CardinalDirections.North);
// logs 4
console.log(CardinalDirections.West);

// Numeric Enums - Fully Initialized
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);

// String Enums
enum CardinalDirections {
  North = "North",
  East = "East",
  South = "South",
  West = "West",
}
// logs "North"
console.log(CardinalDirections.North);
// logs "West"
console.log(CardinalDirections.West);
