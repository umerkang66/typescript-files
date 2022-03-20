class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  public get(index: number): T {
    return this.collection[index];
  }
}

const nums = [1, 2, 3];
const numsClass = new ArrayOfAnything<number>(nums);

// Generics with functions
function printAnything<T>(arr: T[]): void {
  arr.forEach((value: T) => {
    console.log(value);
  });
}

printAnything<string>(['a', 'b', 'c']);

// Generic with constraints
interface Printable {
  print(): void;
}

class Car implements Printable {
  print(): void {
    console.log('I am a car');
  }
}

class House implements Printable {
  print(): void {
    console.log('I am a house');
  }
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  arr.forEach((value: T): void => {
    value.print();
  });
}

printHousesOrCars<Printable>([new House()]);
printHousesOrCars<Printable>([new Car()]);
