const keys = ['color', 'carbonated', 'sugar'];

// By using this we can't swap the order
// type alias
type Drink = [string, boolean, number];

const values: Drink = ['brown', true, 40];

// NOT RECOMMENDED
// By using this we can swap the order
const values2: (string | number | boolean)[] = ['brown', true, 40];
