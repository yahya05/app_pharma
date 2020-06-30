import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { TextInput } from 'react-native-paper';
import Compte_Home from './compte_stack/Compte_Home';
import GlobalStyles from '../assets/Gen_styles';
import { createStackNavigator } from '@react-navigation/stack';
import Panier_Home from './panier_stack/Panier_Home';
import Ordon from './panier_stack/Ordon';
import Ordon_cont_phar from './panier_stack/Ordon_cont_phar';
import Ordon_contenu from './panier_stack/Ordon_contenu';
import { Provider } from 'mobx-react'
import { ScrollView } from 'react-native-gesture-handler';
import { observer , inject  } from "mobx-react";
import Loading_ord from './panier_stack/Loading_ord';

const Stack =createStackNavigator();
 
@inject('store')
@observer
export default class Panier extends React.Component {
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
  
  initialRouteName="Home"
  headerMode="none"

 
  


  
  >
    <Stack.Screen name="Loading" component={Loading_ord}
    />

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
  }
    

