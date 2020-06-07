import React,{useState} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { TextInput } from 'react-native-paper';
import Compte_Home from './compte_stack/Compte_Home';

import GlobalStyles from '../assets/Gen_styles';
import { createStackNavigator } from '@react-navigation/stack';
import Panier_Home from './panier_stack/Panier_Home';
import Ordon from './panier_stack/Ordon';
import Ordon_cont_phar from './panier_stack/Ordon_cont_phar';
import Ordon_contenu from './panier_stack/Ordon_contenu';


const Stack =createStackNavigator();

const Panier=({ navigation,route}) =>{
  
  if(route.state && route.state.index>0){
    navigation.setOptions({tabBarVisible:false})
  }
  else{
    navigation.setOptions({tabBarVisible:true})

  }
  
  return(
  <Stack.Navigator
  
  initialRouteName="Panier"
  headerMode="none"

 
  


  
  >
    <Stack.Screen name="Home" component={Panier_Home}
    />

   <Stack.Screen name="Ordon" component={Ordon}
    />
 
   
 <Stack.Screen name="Ordon_contenu" component={Ordon_contenu}
    />
 <Stack.Screen name="Ordon_phar" component={Ordon_cont_phar}
    />
   

  </Stack.Navigator>)
}
  export default Panier;
    

