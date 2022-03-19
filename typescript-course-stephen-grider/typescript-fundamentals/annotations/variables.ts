let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: undefined = undefined;

// Built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumber: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
const point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Functions
const logNumber: (i: number) => void = i => {
  console.log(i);
};

// When to use annotations
// 1) Function that returns the "any" type
const json = '{"x": 10, "y": 20}';
const coordinate: { x: number; y: number } = JSON.parse(json);

console.log(coordinate);

// 2) When we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean = false;

words.forEach(word => {
  if (word === 'green') {
    foundWord = true;
  }
});

console.log(foundWord);

// 3) Variable whose type cannot be inferred correctly
let numbers = [10, 1, 12];
let numberAboveTwelve: number | boolean = false;

numbers.forEach(number => {
  if (number > 12) {
    numberAboveTwelve = number;
  }
});
