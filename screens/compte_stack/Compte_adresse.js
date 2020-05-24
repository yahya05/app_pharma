import React,{useState} from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity,Image } from 'react-native';
import GlobalStyles from '../../assets/Gen_styles';
import Feather from 'react-native-vector-icons/Feather';


import { TextInput } from 'react-native-paper';



const Compte_adresse=({navigation}) =>{

    return (
      <View style={GlobalStyles.container}>
      <View style={{flexDirection:'row',alignItems:"center",marginTop:"7%"}} >
         
         
            <TextInput style={{       padding:10,
          paddingLeft:27,
          paddingRight:"25%",
          borderRadius:10,
          borderColor:"#ddd",
          borderWidth:1,
          height:25,
          marginLeft:5,
          marginRight:5,
          backgroundColor:"white",
          borderBottomColor:'#ddd'}} placeholder="saisissez une adresse" 
       autoFocus={true}
            />
           <Feather name="search" size={26} style={GlobalStyles.icon} />

        
           
      
      <View   >

        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Text style={{color:"#008A00",fontSize:17,fontWeight:"bold",textAlign:"right"}}>ANNULER</Text>


        </TouchableOpacity>
        </View>




        </View>
     
    </View>
    );
  }
  export default  Compte_adresse;