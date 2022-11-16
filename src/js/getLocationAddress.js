const LatLngAdr = require('latlng-address');
// import LatLngAdr from 'latlng-address';

const config = {
  key: 'AIzaSyAqyTYGtrkE3itqQLtElL - qN7GwlqOJTOQ',
  stagger_time: 1000,
  encode_polylines: false,
  secure: true,
};

export const locationRequest = new LatLngAdr(config);
