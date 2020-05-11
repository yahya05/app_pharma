import React,{useState} from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity,Image } from 'react-native';
import GlobalStyles from '../../assets/Gen_styles';

import { TextInput } from 'react-native-paper';

import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Pharma_D=({navigation}) =>{

    return (
      <View style={GlobalStyles.container}>
      <View style={GlobalStyles.header_B} >
      
      <View  style={GlobalStyles.header_Back}  >

        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Image source={require('../../assets/back.png')} style={GlobalStyles.back}  />

        </TouchableOpacity>
        </View>

<View style={GlobalStyles.title_Back} >
<Text style={GlobalStyles.title} > TROUVER UNE PHARMACIE</Text>

</View>


        </View>
        <View  >
         
            <TextInput style={GlobalStyles.input} placeholder="Rechercher une pharmacie" 
         autoFocus={true}   underlineColorAndroid="transparent"
            />

<Feather name="search" size={26} style={GlobalStyles.icon} />
<FontAwesome5 name="location-arrow" size={24} color="#008A00" onPress={()=>navigation.navigate('Map')} style={{position:"absolute", alignSelf:"flex-end",marginTop:"2%",marginRight:"3%"}} />
        
           
          </View>

    </View>
    );
  }
  export default Pharma_D;