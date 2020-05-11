import React,{useState} from 'react';
import { StyleSheet, Text, View,Button ,TouchableOpacity,Image} from 'react-native';
import GlobalStyles from '../../assets/Gen_styles';
import { TextInput } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';


const Produit_Home=({navigation}) =>{

    return (
      <View style={GlobalStyles.container}>
        <View style={GlobalStyles.header} >
          <Text style={GlobalStyles.title}>RECHERCHER UN MEDICAMENT</Text>
        </View>
        <View style={styles.view1}>
          <Text style={styles.text1} >Entrer le nom du médicament </Text>
        </View>
 
          <View style={GlobalStyles.input_view}>
            <TouchableOpacity onPress={()=>navigation.navigate('Detail')}>
            <TextInput style={GlobalStyles.input} placeholder="Rechercher un médicament" 
            editable = {false}
            />
           <Feather name="search" size={26} style={GlobalStyles.icon} />

            </TouchableOpacity>
           
          </View>
          <View>
            
            <Text style={styles.text2}> Vous pouvez consulter sur le prix du  médicament .</Text>
          </View>
          <Image source={require('../../assets/produit.png')}  style={{alignSelf:"center",marginTop:30,height:320,}} />
  
      </View>
    );
  }
  const styles= StyleSheet.create({
    text1:{
      color:'grey',
      fontSize:16,
      textAlign:"center",
    },
    view1:{
      marginTop:15,
      marginLeft:9
    },
    text2:{
fontSize:13,
textAlign:"center",

    }

  })
  export default Produit_Home;