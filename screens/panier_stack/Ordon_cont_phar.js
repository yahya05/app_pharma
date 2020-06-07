import React,{useState} from 'react';
import { StyleSheet, Text, View,Button,Image } from 'react-native';
import GlobalStyles from '../../assets/Gen_styles';
import { TextInput } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Ordon_cont_phar=({navigation}) =>{
    return (
      <View style={GlobalStyles.container}>
      <View style={GlobalStyles.header} >

        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <View>
        <Image source={require('../../assets/back.png')} style={GlobalStyles.back}  />

        </View>

        </TouchableOpacity>
        </View>
        <View style={{marginTop:"9%"}} >
           
                <View  style={{backgroundColor:"white"}} >
                    <View style={[GlobalStyles.compte, { flexDirection:'row',   alignItems:"center",}]}>
                       
                        <View style={{marginLeft:"3%"}}>
                             <Text style={{fontSize:20}} >ORDONNANCE ID</Text>
                             <Text style={{color:"#808080",marginVertical:5}}>ID</Text>
                             <Text style={{color:"#808080",marginVertical:5}}>TITRE</Text>
                             <Text style={{color:"#808080",marginVertical:5}}>COMMENTAIRE</Text>

                        </View>
                       


                    </View>
          
                   

          
        <View style={{borderTopColor:"#E0E0E0",borderTopWidth:1}} >
          
        <View style={styles.view1}>
          <Text style={styles.text1} >VOTRE COMMENTAIRE </Text>
        </View>
        <View >
               
                   
               
                <TextInput style={{backgroundColor:'#E9E9E9',height:50,paddingBottom:"30%",  paddingRight:0}}  placeholder="Laissez un commentaire à votre client... (facultatif)" 
        underlineColorAndroid="transparent"
            />
                 </View>
         
        </View>
        <View style={styles.view1}>
          <Text style={styles.text1} >L'ORDONNANCE</Text>
        </View>
        <View>

        </View>

                 
                 </View>
                 <View style={{marginVertical:"9%",flexDirection:"row",justifyContent:"space-around"}}>
    <TouchableOpacity>
    <Text style={{color:"green",alignSelf:"center",fontSize:17,fontWeight:"bold"}}>VALIDER</Text>
     </TouchableOpacity>
    
   
    <TouchableOpacity>
    <Text style={{color:"red",alignSelf:"center",fontSize:17,fontWeight:"bold"}}>REFUSER</Text>
     </TouchableOpacity>
    </View>
        </View>
    </View>
    );
  }
  export default Ordon_cont_phar;
  const styles= StyleSheet.create({
    text1:{
      color:'grey',
      fontSize:16,
      paddingLeft:3
    },
    view1:{
      marginTop:15,
      marginLeft:9,
      marginBottom:8,


    },
    text2:{
fontSize:13,
textAlign:"center",

    }

  })