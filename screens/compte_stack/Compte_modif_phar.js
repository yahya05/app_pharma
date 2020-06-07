import React,{useState} from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity,Image } from 'react-native';
import GlobalStyles from '../../assets/Gen_styles';
import { TextInput } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';

import { ScrollView } from 'react-native-gesture-handler';


const Compte_modif_phar=({navigation}) =>{

    return (
      <View style={GlobalStyles.container}>
      <View style={GlobalStyles.header_B} >
      
      <View  style={GlobalStyles.header_Back}  >

        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Image source={require('../../assets/back.png')} style={GlobalStyles.back}  />

        </TouchableOpacity>
        </View>

<View style={{ marginHorizontal:"15%"}} >
<Text style={{ fontWeight:"bold",textAlign:"center",fontSize:18,marginTop:18}} >MODIFIER LES INFO DE VOTRE </Text>
<Text style={{marginBottom:18,fontSize:18     ,fontWeight:"bold", textAlign:"center",}} >PHARMACIE</Text>

</View>


        </View>

        <ScrollView>

        <View style={{ marginBottom:20}}>
        <Image source={require('../../assets/HH.png')} style={{alignSelf:"center",height:200,width:200}}  />

            <Text  style={{  color:'grey',fontSize:19,paddingLeft:3,textAlign:"center"}}>
                NOM PHARMACIE
            </Text>
        </View>
        <View  >
            <TextInput style={{backgroundColor:'white'}}  placeholder="Types de votre pharmacie" 
        underlineColorAndroid="transparent"
            />
              <TextInput style={{backgroundColor:'white'}} placeholder="Adresse" 
        underlineColorAndroid="transparent"
            />
                <TextInput style={{backgroundColor:'white'}} placeholder="FIX" 
        underlineColorAndroid="transparent"
            />
               <TextInput style={{backgroundColor:'white'}} placeholder="Adresse e-mail" 
        underlineColorAndroid="transparent"
            />
      
        <TouchableOpacity   >
        <View style={GlobalStyles.buttonb_C}>
            <Text style={GlobalStyles.buttonText}>SAUVGARDER</Text>
            
        </View>
        
    </TouchableOpacity>


    
          </View>
        </ScrollView>

    </View>
    );
  }
  export default Compte_modif_phar;