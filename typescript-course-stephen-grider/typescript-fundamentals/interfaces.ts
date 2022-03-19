// When it will be passed into printVehicle, it must satisfy the Vehicle interface, oldCivic can have even more properties, than the Vehicle interface, but it should also contains all the properties that Vehicle interface has specified, if one from the interface is missing, typescript will return an error

interface Reportable {
  summary: () => string;
}

const oldCivic = {
  model: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Model is ${this.model}, bought in ${this.year} and it is broken: ${this.broken}`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink is carbonated: ${this.carbonated}, and has ${this.sugar} grams of sugar, and its color is ${this.color}`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
