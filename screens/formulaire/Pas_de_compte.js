import React,{useState} from 'react';
import { StyleSheet, Text, View,Button,Image } from 'react-native';
import GlobalStyles from '../../assets/Gen_styles';
import { TextInput } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Pas_de_compte=({navigation}) =>{
    return (
      <View style={GlobalStyles.container}>
      <View style={{  margin:10,flexDirection:'row'}}>

        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <View>
        <Image source={require('../../assets/back.png')} style={GlobalStyles.back}  />

        </View>

        </TouchableOpacity>


        </View>

        <View style={{  alignItems:'center',
 borderRadius:10,
 alignSelf:"center",
 backgroundColor:'white',
 paddingVertical:5,
 padding:"18%",
 marginTop:"70%",
 borderColor:'#E9E9E9',
 borderWidth:1}} >
  <View  >
 

<Text style={{fontSize:25,textAlign:'center',marginTop:10,fontWeight:"bold"}}> Vous êtes un :</Text>

  </View>
 
<View style={{ alignItems:'center',
flexDirection:'row',
justifyContent:"space-evenly"}}>
  <View style={{marginTop:19,marginHorizontal:10,marginBottom:23}}>
    <TouchableOpacity  onPress={()=>{navigation.navigate('Pharma')} }>
    <Text style={{color:"#008A00",alignSelf:"center",fontSize:17,fontWeight:"bold"}}>PHARMACIEN</Text>
     </TouchableOpacity>
    </View>
    <View style={{marginTop:19,marginHorizontal:10,marginBottom:23}}>
    <TouchableOpacity  onPress={()=>{navigation.navigate('Userform')}}>
    <Text style={{color:"#008A00",alignSelf:"center",fontSize:17,fontWeight:"bold"}}>CLIENT</Text>
     </TouchableOpacity>
     </View>
     </View>
</View>
    </View>
    );
  }
  export default Pas_de_compte;
    
 