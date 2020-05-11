import React,{useState} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { TextInput } from 'react-native-paper';
import Produit_Home from './produit_stack/Produit_Home';
import Produit_D from './produit_stack/Produit_D';

import GlobalStyles from '../assets/Gen_styles';
import { createStackNavigator } from '@react-navigation/stack';
const Stack =createStackNavigator();

const Produit=({ navigation,route}) =>{
  
  if(route.state && route.state.index>0){
    navigation.setOptions({tabBarVisible:false})
  }
  else{
    navigation.setOptions({tabBarVisible:true})

  }
  
  return(
  <Stack.Navigator
  
  initialRouteName="produit"
  headerMode="none"

 
  


  
  >
    <Stack.Screen name="Home" component={Produit_Home}
    />
   
    <Stack.Screen name="Detail" component={Produit_D}
  
    
     


     />


  </Stack.Navigator>)
}
  export default Produit;
    

