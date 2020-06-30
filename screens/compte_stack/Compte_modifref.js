import React from 'react';
import { View, Image,Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';



 export default class GooglePlacesInput extends React.Component  {
    constructor(){
        super()
        this.state={
            region: {}
        }
      }
    getCoordsFromName(loc) {
        this.setState({
            region: {
                latitude: loc.lat,
                longitude: loc.lng,
                latitudeDelta: 0.003,
                longitudeDelta: 0.003
            }
        });
    }
    render(){
       
  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      minLength={7} // minimum length of text to search
      autoFocus={false}
      returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
      listViewDisplayed='false'    // true/false/undefined
      fetchDetails={true}
      renderDescription={row => row.description} // custom description render
      onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      
      getDefaultValue={() => 'pharmacie '}
      
      query={{
        // available options: https://developers.google.com/places/web-service/autocomplete
        key: 'AIzaSyAQ4Udmdmd60avwA2FGIPdu39WBtoFmefg',
        language: 'fr', // language of the results
        default: 'geocode',
        components: 'country:MA',
        types:  ["pharmacy", "health", "point_of_interest", "store", "establishment"]
      }}
      
      styles={{
        textInputContainer: {
          width: '100%'
        },
        description: {
          fontWeight: 'bold'
        },
        predefinedPlacesDescription: {
          color: '#1faadb'
        }
      }}
      
      currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
      currentLocationLabel="Current location"
      nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
      GoogleReverseGeocodingQuery={{
        // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
        
      }}
      GooglePlacesSearchQuery={{
        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
        rankby: 'distance',
        type: 'pharmacy'
      }}

      filterReverseGeocodingByTypes={ ["pharmacy", "health", "point_of_interest", "store", "establishment"]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
      

      debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
    /*  renderLeftButton={()  => <Image source={require('path/custom/left-icon')} />}*/
      renderRightButton={() => <Text></Text>}
    />
  );
}}