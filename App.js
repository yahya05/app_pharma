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
import Connect from './screens/formulaire/Log';
import Pharma from './screens/formulaire/Pharma';
import Userform from './screens/formulaire/User';
import Pas_de_compte from './screens/formulaire/Pas_de_compte';
import Compte from './screens/Compte'
import Recherche from './screens/Recherche'
import Panier from './screens/Panier';
import Ordon from './screens/panier_stack/Ordon';
import Ordon_contenu from './screens/panier_stack/Ordon_contenu';
import Ordon_cont_phar from './screens/panier_stack/Ordon_cont_phar';



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
 
       <Stack.Screen name="Panier" component={Panier}/>
    
   
    <Stack.Screen name="Connect" component={Connect} />

<Stack.Screen name="Pharma" component={Pharma} />
<Stack.Screen name="Userform" component={Userform} />
<Stack.Screen name="pasdecompte" component={Pas_de_compte} />




    </Stack.Navigator>)
  }


  return (
    
    <NavigationContainer >
    <MaterialBot.Navigator
    
    
    
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Produit') {
          iconName = focused ? require('./assets/drug.png') : require('./assets/MED.png');
        }
       else if (route.name === 'Recherche') {
          iconName = focused ? require('./assets/lg.png') : require('./assets/l.png');
        }
        else if (route.name === 'Home') {
          iconName = focused ? require('./assets/house3.png') : require('./assets/home.png');
        }
        else if (route.name === 'Garde') {
          iconName = focused ? require('./assets/24.png') : require('./assets/26.png');
        }
        else if (route.name === 'Compte') {
          iconName = focused ? require('./assets/user.png') : require('./assets/userr.png');
        }
        else if (route.name === 'Panier') {
          iconName = focused ? require('./assets/panier.png') : require('./assets/panier_.png');
        }

        // You can return any component that you like here!
        return( <Image source={iconName} style={{width:28,height:29}} resizeMode="contain"/>)
    
      }
      
    })}
   
    
     
     
        tabBarOptions={{
          activeTintColor: "#008A00",
          inactiveTintColor: 'grey',
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
       <MaterialBot.Screen name="Panier" component={Panier}
      
      />
      <MaterialBot.Screen name="Compte" component={Compte}
    options={{
    tabBarVisible:false}}
        />

      </MaterialBot.Navigator>
 


    </NavigationContainer>
    
  );
}


