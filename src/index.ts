import { User } from './User';
import { Company } from './Company';
import { Map } from './Map';

const gMap = new Map('map', {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0
  }
});
gMap.addUserMarker(new User());
gMap.addCompanyMarker(new Company());
