import React , { Component } from 'react'
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
import Compte_modif_phar from './compte_stack/Compte_modif_phar';
import { Provider } from 'mobx-react'
import { ScrollView } from 'react-native-gesture-handler';
import { observer , inject  } from "mobx-react";

const Stack =createStackNavigator();

@inject('store')
@observer
export default class Compte extends React.Component {
  constructor(props){
    super(props)
  }
  render() {

  if(this.props.route.state && this.props.route.state.index>0){
    this.props.navigation.setOptions({tabBarVisible:false})
  }
  else{
    this.props.navigation.setOptions({tabBarVisible:true})

  }
  
  return(
  <Stack.Navigator
  
  initialRouteName="Compte"
  headerMode="none"

 
  


  
  >
    <Stack.Screen name="Compte_Home" component={Compte_Home}
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
      <Stack.Screen name="Compte_modif_phar" component={Compte_modif_phar}
    />

  </Stack.Navigator>)
}
}