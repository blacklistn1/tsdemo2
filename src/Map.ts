import { User } from './User';
import { Company } from './Company';
import { Mappable } from './interfaces/Mappable';

export class Map {
  private readonly googleMap: google.maps.Map;

  constructor(elementId: string, mapOptions: object) {
    this.googleMap = new google.maps.Map(document.getElementById(elementId) as HTMLElement, mapOptions)
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });

      infoWindow.open(this.googleMap, marker);
    })
  }

  
}