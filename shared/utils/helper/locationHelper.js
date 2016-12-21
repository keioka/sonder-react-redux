export const addressFilter = (addressComponents): Object => {
  const address = { city: '', province: '', country: '' }
  if (!addressComponents instanceof Array) {
    return address
  }

  const locationType = {
    city: 'locality',
    province: 'administrative_area_level_1',
    country: 'country',
  }

  addressComponents.forEach((component) => {
    switch (component.types[0]) {
      case locationType.city:
        address.city = component.long_name
        break
      case locationType.province:
        address.province = component.long_name
        break
      case locationType.country:
        address.country = component.long_name
        break
    }
  })

  return address
}

export const transformLatLng = (location): Object => ({ latitude: location.lat, longitude: location.lng })

export const transformLatLngToLongName = (location): Object => ({ lat: location.latitude, longitude: location.longitude })
