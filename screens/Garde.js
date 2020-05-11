import React,{useState} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { TextInput } from 'react-native-paper';
import Garde_D from './garde_stack/Garde_D';
import Garde_Home from './garde_stack/Garde_Home';

import GlobalStyles from '../assets/Gen_styles';
import { createStackNavigator } from '@react-navigation/stack';
const Stack =createStackNavigator();

const Garde=({ navigation,route}) =>{
  
  if(route.state && route.state.index>0){
    navigation.setOptions({tabBarVisible:false})
  }
  else{
    navigation.setOptions({tabBarVisible:true})

  }
  
  return(
  <Stack.Navigator
  
  initialRouteName="Garde"
  headerMode="none"

 
  


  
  >
    <Stack.Screen name="Home" component={Garde_Home}
    />
   
    <Stack.Screen name="Detail" component={Garde_D}
  
    
     


     />


  </Stack.Navigator>)
}
  export default Garde;
    

