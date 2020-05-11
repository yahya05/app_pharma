import React,{useState} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { TextInput } from 'react-native-paper';
import Pharma_D from './recherche_stack/Pharma_D';
import Pharma_Home from './recherche_stack/Pharma_Home';

import GlobalStyles from '../assets/Gen_styles';
import { createStackNavigator } from '@react-navigation/stack';
import Pharma_Map from './recherche_stack/Pharma_Map';
const Stack =createStackNavigator();

const Recherche=({ navigation,route}) =>{
  
  if(route.state && route.state.index>0){
    navigation.setOptions({tabBarVisible:false})
  }
  else{
    navigation.setOptions({tabBarVisible:true})

  }
  
  return(
  <Stack.Navigator
  
  initialRouteName="Pharmacie"
  headerMode="none"

 
  


  
  >
    <Stack.Screen name="Home" component={Pharma_Home}
    />
   
    <Stack.Screen name="Detail" component={Pharma_D}
  
    
     


     />
         <Stack.Screen name="Map" component={Pharma_Map}
  
    
     


  />



  </Stack.Navigator>)
}
  export default Recherche;
    

