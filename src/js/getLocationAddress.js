export async function getLocationAddress() {
  // const latLng = 'location.lat , location.long';
  const latLng = '50.450001,30.523333';
  const key = 'AIzaSyAqyTYGtrkE3itqQLtElL - qN7GwlqOJTOQ';

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latLng}&key=${key}&language=en&result_type=locality`
    );
    const jsonData = await response.json();
    console.log(jsonData);
    const searchCity = jsonData.results[0].address_components[0].short_name;
    const searchCountry = jsonData.results[0].address_components[2].long_name;
    const searchAddress = `${searchCity}, ${searchCountry}`;
    return searchAddress;
  } catch (error) {
    if (!response.ok) {
      throw new Error(response.status);
    }
  }
}
