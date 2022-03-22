// This will add Reflect variable to the global scope
import 'reflect-metadata';

const plane = {
  color: 'red',
};

Reflect.defineMetadata('note', 'hi there', plane);
// console.log(Reflect.getMetadata('note', plane));

// Associate metadata to plane's property
Reflect.defineMetadata('note', 'note on property color', plane, 'color');
// console.log(Reflect.getMetadata('note', plane, 'color'));

// METADATA ON CLASS
@printMetadata
class Plane {
  color: string = 'blue';

  @markFunction('This plane contains government vips')
  fly(): void {
    console.log('Plane is flying');
  }
}

function markFunction(secretInfo: string) {
  // target will be prototype of plane
  return function (target: any, key: string) {
    // Apply metadata on fly method that is present on prototype of Plane class
    Reflect.defineMetadata('secret', secretInfo, target, key);
  };
}

// When decorator is applied to the class, the target become constructor of Plane class, (that is Plane class itself, not prototype, not its instance )
// Class decorator will run at last, means all the other decorators should done their jobs
function printMetadata(target: typeof Plane) {
  // prototype is an object, that has keys as methods names, and as values, the function itself

  // All the function keys
  for (let key in target.prototype) {
    // Look in the prototype for keys, (the "secret" metadata that we have applied)
    console.log(Reflect.getMetadata('secret', target.prototype, key));
  }
}
