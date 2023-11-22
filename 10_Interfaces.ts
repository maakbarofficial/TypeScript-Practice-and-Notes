// Interfaces are similar to type aliases, except they only apply to object types.

interface Rectangle {
  height: number;
  width: number;
  areaName: string;
}

const rectangle: Rectangle = {
  height: 20,
  width: 10,
  areaName: "Some Random Area",
};

console.log(rectangle);

// Extending Interfaces

// Extending an interface means you are creating a new interface with the same properties as the original, plus something new.

interface Area {
  height: number;
  width: number;
}

interface ColoredArea extends Area {
  color: string;
}

const coloredArea: ColoredArea = {
  height: 20,
  width: 10,
  color: "red",
};

console.log(coloredArea);
