// const LatLngAdr = require('latlng-address');
// // import LatLngAdr from 'latlng-address';

// const config = {
//   key: 'AIzaSyAqyTYGtrkE3itqQLtElL - qN7GwlqOJTOQ',
//   stagger_time: 1000,
//   encode_polylines: false,
//   secure: true,
// };

// export const locationRequest = new LatLngAdr(config);
export async function getLocationAddress() {
  const latLng = '50.450001,30.523333';
  const key = 'AIzaSyAqyTYGtrkE3itqQLtElL - qN7GwlqOJTOQ';

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latLng}&key=${key}&language=en&result_type=locality`
    );
    const jsonData = await response.json();
    const serchAddress = jsonData.results[0].formatted_address;

    return serchAddress;
  } catch (error) {
    if (!response.ok) {
      throw new Error(response.status);
    }
  }
}
