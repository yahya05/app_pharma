import React, {Component,useState,useEffect} from 'react';
import {Text,View,TouchableOpacity,Image,StyleSheet} from 'react-native';

import MapView, {PROVIDER_GOOGLE, Marker,Callout} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';


export default class Garde_map extends Component {
 
  constructor(){
    
    super()
    this.state={
      lat:null,
      long:null,
      places:[],
    }
    }
   UNSAFE_componentWillMount(){
    const { latitude } = this.props.route.params;
    const {longitude} = this.props.route.params
    Geolocation.getCurrentPosition(
        (position)=>{
            this.setState({lat:latitude,long:longitude});
            this.getPlaces()
        }
      )
           
        }
     
    
  
        getPlaces=()=>{
          const url=this.getUrlWithParameters(this.state.lat,this.state.long,100000,'pharmacy','AIzaSyAQ4Udmdmd60avwA2FGIPdu39WBtoFmefg')  
        fetch(url)
        .then((data)=>data.json())
        .then((res)=>{
          const arrayMarker=[];
          res.results.map((element,i)=>{
            { try {
        
            
                if(element.opening_hours.open_now){
                var etat="etat=ouverte"
                arrayMarker.push(
             
                    <Marker 
                    key={i}
                    pinColor='green'
                   title={element.name}
                    coordinate= {{
                      latitude:element.geometry.location.lat,
                      longitude:element.geometry.location.lng
         
                    }}
                   
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
                }
    
              } catch (error) {
                var etat="non declaree"
                
              }}
       
           
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
  render() {
  
 return(
 
  <View>
  {this.state.lat ?   <MapView
     provider={PROVIDER_GOOGLE}
     style={styles.map}
      
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