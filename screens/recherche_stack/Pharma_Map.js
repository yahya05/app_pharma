import React, {Component, useState, useEffect} from 'react';
import {View, StyleSheet,ActivityIndicator,AppRegistry,Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import MapViewDirections from'react-native-maps-directions'


class Pharma_Map extends Component{
  constructor(){
    super()
    this.state={
      lat:null,
      long:null,
      places:[],
      desLatitude:null,
      desLongitude:null
    }
  }
  UNSAFE_componentWillMount(){
    Geolocation.getCurrentPosition(
      (position)=>{
        const lat=position.coords.latitude;
        const long=position.coords.longitude;
        this.setState({lat,long})
        console.log(lat,long)
        this.getPlaces()
      }
    )
  }
 
  onMarkerPress=(element)=>{
    const l=element.geometry.location.lat;
    const lo=element.geometry.location.lng;
    
   this.setState({
    desLatitude:l,
    desLongitude:lo
   })
 }

      getPlaces=()=>{
        const url=this.getUrlWithParameters(this.state.lat,this.state.long,5000,'pharmacy','AIzaSyAQ4Udmdmd60avwA2FGIPdu39WBtoFmefg')  
      fetch(url)
      .then((data)=>data.json())
      .then((res)=>{
        const arrayMarker=[];
        res.results.map((element,i)=>{
         
          { try {
        
            
            if(element.opening_hours.open_now)
            var etat="etat=ouverte"
            else 
            var etat="etat=fermée"

          } catch (error) {
            var etat="non declaree"
          }}

         arrayMarker.push(
           <Marker 
           key={i}
           pinColor='green'
          title={element.name}
           coordinate= {{
             latitude:element.geometry.location.lat,
             longitude:element.geometry.location.lng

           }}
           onPress={()=>this.onMarkerPress(element)}
           >
             <Callout>
             <Text>
               
             {element.name}
               </Text>
               <Text>
               {etat}
               </Text>
             </Callout>
             </Marker>
             
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
            latitudeDelta:0.0222,
            longitudeDelta:0.0221
           } }>
       
              {this.state.places}
              { this.state.desLatitude ? <MapViewDirections
        origin={{
        
          latitude:this.state.lat,
          longitude:this.state.long

        }}
        destination={{
          latitude:this.state.desLatitude,
          longitude:this.state.desLongitude
        }}
        apikey='AIzaSyAQ4Udmdmd60avwA2FGIPdu39WBtoFmefg'
        strokeWidth={4}
        strokeColor="green"
        
        mode="DRIVING"
        /> :null}

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