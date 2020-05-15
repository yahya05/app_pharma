import React, {Component, useState, useEffect} from 'react';
import {View, StyleSheet,ActivityIndicator,AppRegistry} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';


class Pharma_Map extends Component{
  constructor(){
    super()
    this.state={
      lat:null,
      long:null,
      places:[],
    }
  }
  UNSAFE_componentWillMount(){
    Geolocation.getCurrentPosition(
      (position)=>{
        const lat=position.coords.latitude;
        const long=position.coords.longitude;
        this.setState({lat,long})
        this.getPlaces()
      }
    )
  }
  

      getPlaces=()=>{
        const url=this.getUrlWithParameters(this.state.lat,this.state.long,2000,'pharmacy','AIzaSyC2QNqKClJQ9nUR-Zi5Gv4NnUFpKwAoHdg')  
      fetch(url)
      .then((data)=>data.json())
      .then((res)=>{
        const arrayMarker=[];
        res.results.map((element,i)=>{
         arrayMarker.push(
           <Marker 
           key={i}
           coordinate= {{
             latitude:element.geometry.location.lat,
             longitude:element.geometry.location.lng

           }}/>
         )
        })
        this.setState({places:arrayMarker})
      })
  }
      
      
      
      getUrlWithParameters=(lat,long,radius,type,API)=>{
        const url='https://maps.googleapis.com/maps/api/place/nearbysearch/json?';
        const location=`location=${lat},${long}&radius=${radius}`;
        const typeData=`&type=${type}`;
        const key=`&key=${API}`;


        return (`${url}${location}${typeData}${key}`);
      }
      render(){
      return   (
        <View>
     {this.state.lat ?   <MapView
        provider={PROVIDER_GOOGLE}
          style={styles.map}
          loadingEnabled
          showsUserLocation
          initialRegion={{
            latitude:this.state.lat,
            longitude:this.state.long,
            latitudeDelta:0.0922,
            longitudeDelta:0.0421
           } }>
       
              {this.state.places}

           </MapView>: null}
           </View>
    )
  }

}
export default Pharma_Map;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    height: '100%',
    width: '100%',
  },
});