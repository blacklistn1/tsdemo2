import { faker } from '@faker-js/faker';
import { Mappable } from './interfaces/Mappable';


export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string;

  constructor() {
    this.name = faker.name.firstName();
    this.color = 'violet';
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude()
    }
  }

  markerContent(): string {
    return `User name: ${this.name}`;
  }

}
