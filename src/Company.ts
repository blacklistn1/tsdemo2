import { faker } from '@faker-js/faker';
import { Mappable } from './interfaces/Mappable';

export class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string;
  constructor() {
    this.name = faker.name.firstName();
    this.catchPhrase = faker.company.catchPhrase();
    this.color = 'blue';
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude()
    }
  }

  markerContent(): string {
    return `<h1>${this.name}</h1><h4>${this.catchPhrase}</h4>`;
  }
}