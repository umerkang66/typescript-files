// This is abstract class, we cannot create instance of this class
abstract class Vehicle {
  protected abstract wheels: number;

  constructor(private name: string, private color: string) {}

  public drive(): void {
    console.log(
      `${this.name} with color: ${this.color}, and with ${this.wheels} wheels, is driving`
    );
  }

  public honk(): void {
    console.log(
      `${this.name} with color: ${this.color}, and with ${this.wheels} wheels, is honking`
    );
  }
}

// This is class
class Car extends Vehicle {
  constructor(name: string, color: string, protected wheels: number) {
    super(name, color);
  }
}

const honda = new Car('honda', 'white', 4);
const toyota = new Car('toyota', 'black', 5);

honda.drive();
toyota.honk();
