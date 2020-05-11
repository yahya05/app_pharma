import React, {Component, useState, useEffect} from 'react';
import {View, StyleSheet,ActivityIndicator} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const initialState={
  latitude:null,
  longitude:null,
  longitudeDelta:0.0421,
  latitudeDelta:0.0922,




}
const Pharma_Map=({navigation}) =>{
      const [curentPosition,setCurentPosition]=useState(initialState);
      useEffect(()=>{
        Geolocation.getCurrentPosition(position=>{
          const {longitude,latitude}=position.coords;
          setCurentPosition({
            ...curentPosition,
            latitude,
            longitude,
  
          })

        },
        error=>alert(error.message),
        {timeout:2000,maximumAge:1000}
        )
      },[])
      return  curentPosition.latitude ? (
        <MapView
        provider={PROVIDER_GOOGLE}
          style={styles.map}
          showsUserLocation
          initialRegion={curentPosition}/>
         
    ): <ActivityIndicator style={{flex:1}} animating size="large"/>
  };


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