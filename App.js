import { StyleSheet, Text, View,Image } from 'react-native';
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {  createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Detail from './screens/Detail'
import Produit from './screens/Produit'
import Garde from './screens/Garde'

import Compte from './screens/Compte'
import Recherche from './screens/Recherche'


const Stack =createStackNavigator();

const MaterialBot= createBottomTabNavigator();


export default  App=()=> {

  HomeStack=({ navigation,route})=>{
    if(route.state && route.state.index>0){
      navigation.setOptions({tabBarVisible:false})
    }
    else{
      navigation.setOptions({tabBarVisible:true})

    }
    
    return(
    <Stack.Navigator
    
    initialRouteName="Home"
    headerMode="none"
 
   
    


    
    >
      <Stack.Screen name="Home" component={Home}
      />
     
      <Stack.Screen name="Detail" component={Detail}
    
      
       
  
  
       />
          <Stack.Screen name="Compte" component={Compte}
    
      
       
  
  
    />


    </Stack.Navigator>)
  }


  return (
    
    <NavigationContainer >
    <MaterialBot.Navigator
    
    
    
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Produit') {
          iconName = focused ? require('./assets/pill2.png') : require('./assets/pill1.png');
        }
       else if (route.name === 'Recherche') {
          iconName = focused ? require('./assets/pin.png') : require('./assets/recherche.png');
        }
        else if (route.name === 'Home') {
          iconName = focused ? require('./assets/house3.png') : require('./assets/house4.png');
        }
        else if (route.name === 'Garde') {
          iconName = focused ? require('./assets/28.png') : require('./assets/27.png');
        }
        else if (route.name === 'Compte') {
          iconName = focused ? require('./assets/user.png') : require('./assets/use.png');
        }
     

        // You can return any component that you like here!
        return( <Image source={iconName} style={{width:26,height:23}} resizeMode="contain"/>)
    
      }
      
    })}
   
    
     
     
        tabBarOptions={{
          activeTintColor: "#008A00",
          inactiveTintColor: 'black',
        }}
     
     
     
     >
      <MaterialBot.Screen name="Home" component={HomeStack}
      
      
      />
      <MaterialBot.Screen name="Recherche" component={Recherche}
      
      />
       <MaterialBot.Screen name="Garde" component={Garde}
      
      />
      <MaterialBot.Screen name="Produit" component={Produit}
      
      />
      <MaterialBot.Screen name="Compte" component={Compte}
    options={{
    tabBarVisible:false}}
        />

      </MaterialBot.Navigator>
 


    </NavigationContainer>
    
  );
}


