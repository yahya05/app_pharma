import React,{useState} from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity,Image } from 'react-native';
import GlobalStyles from '../../assets/Gen_styles';
import { TextInput } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';



const Compte_refe=({navigation}) =>{

    return (
      <View style={GlobalStyles.container}>
      <View style={GlobalStyles.header_B} >
      
      <View  style={GlobalStyles.header_Back}  >

        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Image source={require('../../assets/back.png')} style={GlobalStyles.back}  />

        </TouchableOpacity>
        </View>

<View style={GlobalStyles.title_Back} >
<Text style={GlobalStyles.title} >MA PHARMACIE REFERENTE </Text>

</View>


        </View>
        <View style={{backgroundColor:"white",borderBottomColor:"#E0E0E0",borderBottomWidth:1}}  >
         
        <Image source={require('../../assets/phar_fav.png')} style={{height:200,width:"100%"}} />
         
        
<Text style={{fontSize:25,padding:"4%"}} >NOM PHAR </Text>
           
          </View>
          <View style={{backgroundColor:"white",borderBottomColor:"#E0E0E0",borderBottomWidth:1}}  >
         
        
          
         
        <Text style={{color:"red",padding:"4%"}} >ETAT </Text>
            
           </View>
           <View style={{backgroundColor:"white",borderBottomColor:"#E0E0E0",borderBottomWidth:1}}  >
         
        
          
         
         <Text style={{color:"grey",padding:"4%"}} >Adresse   </Text>

             
            </View>
            <View style={{backgroundColor:"white",borderBottomColor:"#E0E0E0",borderBottomWidth:1}}  >
         
        
          
         
         <Text style={{color:"grey",padding:"4%",fontSize:16}} >0538165161  </Text>

             
            </View>
            <View style={{marginVertical:19}}>
    <TouchableOpacity>
    <Text style={{color:"#008A00",alignSelf:"center",fontSize:17,fontWeight:"bold"}}>MODIFIER MA PHARMACIE REFERENTE</Text>
     </TouchableOpacity>
    </View>
    </View>
    
    );
  }
  export default Compte_refe;