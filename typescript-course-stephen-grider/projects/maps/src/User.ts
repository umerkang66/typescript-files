import faker from '@faker-js/faker';
import { MapPointable } from './CustomMap';

// Implements means this class should fulfill the requirements of MapPointable
export class User implements MapPointable {
  public name: string;
  public location: { lat: number; lng: number };

  constructor() {
    this.name = faker.name.firstName();

    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    };
  }

  markerContent(): string {
    return `
      <div>
        <h1>UserName:${this.name}<h1>
      </div>
    `;
  }
}
