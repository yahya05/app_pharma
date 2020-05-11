import React,{useState} from 'react';
import { StyleSheet, Text, View,Button ,TouchableOpacity,Image} from 'react-native';
import GlobalStyles from '../../assets/Gen_styles';
import { TextInput } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';




const Pharma_Home=({navigation}) =>{

    return (
      <View style={GlobalStyles.container}>
        <View style={GlobalStyles.header} >
          <Text style={GlobalStyles.title}>TROUVER UNE PHARMACIE</Text>
        </View>
        <View style={styles.view1}>
          <Text style={styles.text1} >Rechercher une pharmacie ouverte (Horaires) </Text>
        </View>
 
          <View style={GlobalStyles.input_view}>
            <TouchableOpacity onPress={()=>navigation.navigate('Detail')}>
            <TextInput style={GlobalStyles.input} placeholder="Rechercher une pharmacie" 
            editable = {false}
            />
           <Feather name="search" size={26} style={GlobalStyles.icon} />

            </TouchableOpacity>
<FontAwesome5 name="location-arrow" size={24} color="#008A00" onPress={()=>navigation.navigate('Map')} style={{position:"absolute", alignSelf:"flex-end",marginTop:"2%",marginRight:"2%"}} />
           
          </View>
          <View>
          <Text style={styles.text1}>À PROXIMITÉ</Text>
            
            <Text style={styles.text2}> Pour trouver les pharmacies de proximité, veuillez activer la localisation de l'appareil.</Text>
          </View>
          <View style={{flex:1}}  >
            <Image source={require('../../assets/pharma_home.png')} style={{alignSelf:"center",marginTop:30,height:300,width:300}}   />
          </View>
  
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
  export default Pharma_Home;