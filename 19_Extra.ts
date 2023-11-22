// Template Literal Types
// Template Literal Types now allows us to create more precise types using template literals. We can define custom types that depend on the actual values of strings at compile time.

type Color = "red" | "green" | "blue";
type HexColorextends="" color=""> = `#${string}`;

// Usage:
let myColor: HexColor<"blue"> = "#0000FF";


// Index Signature Labels
// Index Signature Labels allows us to label index signatures using computed property names. It helps in providing more descriptive type information when working with dynamic objects.

type DynamicObject = { [key: string as `dynamic_${string}`]: string };

// Usage:
let obj: DynamicObject = { dynamic_key: "value" };