import { User } from './User';
import { Company } from './Company';
import { Mappable } from './interfaces/Mappable';

export class Map {
  private readonly googleMap: google.maps.Map;

  constructor(elementId: string, mapOptions: object) {
    this.googleMap = new google.maps.Map(document.getElementById(elementId) as HTMLElement, mapOptions)
  }

  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    })
  }

  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng
      }
    })
  }

  addCompanyMarker(company: Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: company.location.lat,
        lng: company.location.lng
      }
    })
  }
}