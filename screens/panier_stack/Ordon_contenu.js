import React,{useState} from 'react';
import { StyleSheet, Text, View,Button,Image } from 'react-native';
import GlobalStyles from '../../assets/Gen_styles';
import { TextInput } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Ordon_contenu=({navigation}) =>{
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
                             <Text style={{color:"#808080",marginVertical:5}}>ETAT:TRANSMISE</Text>
                        </View>
                       


                    </View>
          
                    <View style={{backgroundColor:"#D0FABF",marginHorizontal:"3%",padding:6,borderRadius:5}}>

                            <Text style={{color:"#808080",fontSize:15,marginBottom:2}}>Pour recuperer votre commande, munissez-vous de </Text>
                            <Text style={{color:"#808080",fontSize:15}}>votre ordonnance originale, carte de mutuelle</Text>




                    </View>


                    <View style={styles.view1}>
          <Text style={styles.text1} >DANS VOTRE PHARMACIE</Text>
        </View>
        <View style={{borderBottomColor:"#E0E0E0",borderBottomWidth:1}} >
          
                <View  style={GlobalStyles.compte_g} >
                    <View style={GlobalStyles.compte}>
                        <View style={{borderWidth:2,borderColor:'#E9E9E9',borderRadius:100,paddingVertical:9,backgroundColor:'#F2F2F2',marginLeft:9}} >
                        <Image source={require('../../assets/FAV.png')}  style={{marginHorizontal:9,height:20,width:20,borderRadius:100,}} />

                        </View>
                        <View style={{marginLeft:5}}>
                        <Text >Nom PHARMACIE</Text>
                          <Text style={{color:"#808080"}}>adresse</Text>
                        </View>
                        


                    </View>
          
               

              
                 </View>
         
        </View>
        <View style={styles.view1}>
          <Text style={styles.text1} >VOTRE ORDONNANCE</Text>
        </View>
        <View>

        </View>

                 
                 </View>
                 <View style={{marginVertical:19}}>
    <TouchableOpacity>
    <Text style={{color:"red",alignSelf:"center",fontSize:17,fontWeight:"bold"}}>SUPPRIMER MA COMMANDE</Text>
     </TouchableOpacity>
    </View>
        </View>
    </View>
    );
  }
  export default Ordon_contenu;
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