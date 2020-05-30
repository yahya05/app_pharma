import React,{useState} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { TextInput } from 'react-native-paper';
import Compte_Home from './compte_stack/Compte_Home';

import GlobalStyles from '../assets/Gen_styles';
import { createStackNavigator } from '@react-navigation/stack';
import Compte_D from './compte_stack/Compte_D';
import Compte_mdp from './compte_stack/Compte_mdp';
import Compte_refe from './compte_stack/Compte_refe';
import Compte_modifref from './compte_stack/Compte_modifref';
import Compte_adresse from './compte_stack/Compte_adresse';
import Connect from './formulaire/Log';
import Pharma from './formulaire/Pharma';
import Userform from './formulaire/User';
import Pas_de_compte from './formulaire/Pas_de_compte';
const Stack =createStackNavigator();

const Compte=({ navigation,route}) =>{
  
  if(route.state && route.state.index>0){
    navigation.setOptions({tabBarVisible:false})
  }
  else{
    navigation.setOptions({tabBarVisible:true})

  }
  
  return(
  <Stack.Navigator
  
  initialRouteName="Compte"
  headerMode="none"

 
  


  
  >
    <Stack.Screen name="Home" component={Compte_Home}
    />

   <Stack.Screen name="compte" component={Compte_D}
    />
 
   
 <Stack.Screen name="Mdp" component={Compte_mdp}
    />
 <Stack.Screen name="fav" component={Compte_refe}
    />
    <Stack.Screen name="modifav" component={Compte_modifref}
    />
      <Stack.Screen name="adresse" component={Compte_adresse}
    />
     <Stack.Screen name="Connect" component={Connect} />
<Stack.Screen name="Pharma" component={Pharma} />
<Stack.Screen name="Userform" component={Userform} />
<Stack.Screen name="pasdecompte" component={Pas_de_compte} />

  </Stack.Navigator>)
}
  export default Compte;
    

