import React,{useState} from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity,Image } from 'react-native';
import GlobalStyles from '../../assets/Gen_styles';
import { TextInput } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';

import { ScrollView } from 'react-native-gesture-handler';


const Compte_D=({navigation}) =>{

    return (
      <View style={GlobalStyles.container}>
      <View style={GlobalStyles.header_B} >
      
      <View  style={GlobalStyles.header_Back}  >

        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Image source={require('../../assets/back.png')} style={GlobalStyles.back}  />

        </TouchableOpacity>
        </View>

<View style={GlobalStyles.title_Back} >
<Text style={GlobalStyles.title} >MODIFIER VOTRE COMPTE</Text>

</View>


        </View>

        <ScrollView>

        <View style={{ marginBottom:20}}>
        <Image source={require('../../assets/HH.png')} style={{alignSelf:"center",height:200,width:200}}  />

            <Text  style={{  color:'grey',fontSize:19,paddingLeft:3,textAlign:"center"}}>
                0673914985
            </Text>
        </View>
        <View  >
            <TextInput style={{backgroundColor:'white'}}  placeholder="Prenom" 
        underlineColorAndroid="transparent"
            />
              <TextInput style={{backgroundColor:'white'}} placeholder="Nom" 
        underlineColorAndroid="transparent"
            />
               <TextInput style={{backgroundColor:'white'}} placeholder="Adresse e-mail" 
        underlineColorAndroid="transparent"
            />
             <View style={{borderBottomColor:"#E0E0E0",borderBottomWidth:1}} >
            <TouchableOpacity onPress={()=>navigation.navigate('Mdp')}>
                <View  style={GlobalStyles.compte_g} >
                    <View style={GlobalStyles.compte}>
                       
                        <View style={{marginLeft:5}}>
                        <Text style={{  color:'grey',fontSize:16,paddingLeft:3}} >Modifier mot de passe</Text>
                        </View>
                        


                    </View>
          
               

                 <View   >
                 <Image source={require('../../assets/next_g.png')} style={{alignSelf:"center",height:20,width:20}}  />

                 </View>
                 </View>
            </TouchableOpacity>
        </View>
        <TouchableOpacity   >
        <View style={GlobalStyles.buttonb_C}>
            <Text style={GlobalStyles.buttonText}>SAUVGARDER</Text>
            
        </View>
        
    </TouchableOpacity>


    <View style={{marginVertical:19}}>
    <TouchableOpacity>
    <Text style={{color:"red",alignSelf:"center",fontSize:17,fontWeight:"bold"}}>SUPPRIMER MON COMPTE</Text>
     </TouchableOpacity>
    </View>
          </View>
        </ScrollView>

    </View>
    );
  }
  export default Compte_D;