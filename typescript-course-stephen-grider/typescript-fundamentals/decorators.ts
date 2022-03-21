// Decorators is only executed when we first define the class (not when the instance is created)

// We can't get access to the constructor properties in decorators, because decorators execute when class is created, but constructor is executed when instance is created
@classDecorator
class Boat {
  @testDecorator
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `Boat color is ${this.color}`;
  }

  @logError('Oops boat was sunk in ocean')
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    if (speed === 'fast') {
      console.log('Boat is moving');
    } else {
      console.log('Boat is not moving');
    }
  }
}

// First argument will be the prototype of the object (Boat class instance)
// Second argument will be the string to what the decorator has been applied to
// Third argument is descriptor, we can get value of property pilot (that is function itself), and there are some other properties, that we can access
function logError(errMsg: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;
    desc.value = function () {
      try {
        method();
      } catch (err) {
        console.log(errMsg);
      }
    };
  };
}

// If this is on instance property (properties that are in constructor) desc property will be undefined
function testDecorator(target: any, key: string): void {
  console.log(target);
  console.log(key);
}

function parameterDecorator(target: any, key: string, index: number): void {
  // Here index is actually index of parameter (zero based)
  console.log(key, index);
}

// Class decorators only have one parameter, that is constructor function (the Boat class itself)
function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}
