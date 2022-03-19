const add = (a: number, b: number): number => {
  return a + b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (msg: string): void => {
  console.log(msg);
  // If the return type if void, it can return null, or undefined
};

const throwError = (message: string): never => {
  // We will never reach the end of this function, so type of "never"
  throw new Error(message);

  // If this error throwing happens in if block, thus we can reach the end of function, then will specify what values is returned from function as ReturnType, (it can also be void)
};

const forecast = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(weather);
  console.log(date);
};

logWeather(forecast);
