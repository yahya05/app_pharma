import React,{useState} from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity,Image } from 'react-native';
import GlobalStyles from '../../assets/Gen_styles';
import { TextInput } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';



const Compte_mdp=({navigation}) =>{

    return (
      <View style={GlobalStyles.container}>
      <View style={GlobalStyles.header_B} >
      
      <View  style={GlobalStyles.header_Back}  >

        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Image source={require('../../assets/back.png')} style={GlobalStyles.back}  />

        </TouchableOpacity>
        </View>

<View style={GlobalStyles.title_Back} >
<Text style={GlobalStyles.title} >MODIFIER MOT DE PASSE</Text>

</View>


        </View>
        <View  >
         
        <TextInput style={{backgroundColor:'white'}}  placeholder="Nouveau mot de passe" 
        underlineColorAndroid="transparent"
            />
              <TextInput style={{backgroundColor:'white'}} placeholder="Confirmation du mot de passe" 
        underlineColorAndroid="transparent"
            />
            <Text  style={{fontSize:12,fontWeight:"bold",color:"grey",padding:5}}>Votre mot de passe doit contenir au oins 8 caracteres, au minimum une majuscule, une minuscule, un chiffre et un caractere special</Text>
          </View>
          <TouchableOpacity   >
        <View style={GlobalStyles.buttonb_C}>
            <Text style={GlobalStyles.buttonText}>SAUVGARDER</Text>
            
        </View>
        
    </TouchableOpacity>

    </View>
    );
  }
  export default Compte_mdp;