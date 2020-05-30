import React,{useState} from 'react';
import { StyleSheet, Text, View,Button ,TouchableOpacity,Image } from 'react-native';
import GlobalStyles from '../../assets/Gen_styles';
import { TextInput } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


class Garde_Home extends React.Component {
render(){

  return (
    <View style={GlobalStyles.container}>
      <View style={GlobalStyles.header} >
        <Text style={GlobalStyles.title}>Pharmacie de garde</Text>
      </View>
      <View style={styles.view1}>
        <Text style={styles.text1} >Entrer le nom de votre ville </Text>
      </View>

      <View style={GlobalStyles.input_view}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Detail')}>
            <TextInput style={GlobalStyles.input} placeholder="Rechercher une ville" 
            editable = {false}
            />
           <Feather name="search" size={26} style={GlobalStyles.icon} />

            </TouchableOpacity>
<FontAwesome5 name="location-arrow" size={24} color="#008A00" onPress={()=>this.props.navigation.navigate('MAP_geo')} style={{position:"absolute", alignSelf:"flex-end",marginTop:"2%",marginRight:"2%"}} />
           
          </View>
        <Image source={require('../../assets/garde_home.png')}  style={{alignSelf:"center",marginTop:30,marginTop:30,height:300,width:300}} />


    </View>
  );
}
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
  export default Garde_Home;