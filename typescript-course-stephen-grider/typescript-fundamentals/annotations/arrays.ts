const umer: string[] = ['umer', 'kang'];
const carMakers: string[] = [];
const date = [new Date(), new Date()];

const carsByMakeNotInitialize: string[][] = [];
const carsByMake = [['f150'], ['corolla'], ['swift'], ['toyota'], ['suzuki']];

// "map"
const names = ['umer', 'kang', 'gulzar'];
const modifiedNames = names.map(name => {
  return name;
});

// Flexible types
// We don't need to put the types if we initialize it on the same line, we have to put it if we put an empty array
const importantDates = [new Date(), '20-10-2022'];
