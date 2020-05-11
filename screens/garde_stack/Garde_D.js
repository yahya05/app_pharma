import React,{useState} from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity,Image } from 'react-native';
import GlobalStyles from '../../assets/Gen_styles';
import { TextInput } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';



const Garde_D=({navigation}) =>{

    return (
      <View style={GlobalStyles.container}>
      <View style={GlobalStyles.header_B} >
      
      <View  style={GlobalStyles.header_Back}  >

        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Image source={require('../../assets/back.png')} style={GlobalStyles.back}  />

        </TouchableOpacity>
        </View>

<View style={GlobalStyles.title_Back} >
<Text style={GlobalStyles.title} >Pharmacie de garde</Text>

</View>


        </View>
        <View  >
         
            <TextInput style={GlobalStyles.input} placeholder="Rechercher une ville" 
         autoFocus={true}   underlineColorAndroid="transparent"
            />
           <Feather name="search" size={26} style={GlobalStyles.icon} />
        
           
          </View>
    </View>
    );
  }
  export default Garde_D;