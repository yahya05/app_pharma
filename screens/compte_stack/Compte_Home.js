import React,{useState} from 'react';
import { StyleSheet, Text, View,Button ,TouchableOpacity,Image } from 'react-native';
import GlobalStyles from '../../assets/Gen_styles';
import { TextInput } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import ToggleSwitch from 'toggle-switch-react-native'
import { ScrollView } from 'react-native-gesture-handler';

const Compte_Home=({navigation}) =>{

    return (
      <View style={GlobalStyles.container}>
        <View style={GlobalStyles.header} >
          <Text style={GlobalStyles.title}>MON Compte</Text>
        </View>
        <ScrollView>

       
        <View style={{borderBottomColor:"#E0E0E0",borderBottomWidth:1}} >
            <TouchableOpacity  onPress={()=>navigation.navigate('compte')}>
                <View  style={GlobalStyles.compte_g} >
                    <View style={GlobalStyles.compte}>
                          <Image source={require('../../assets/userr.png')}  style={{alignSelf:"center",marginHorizontal:9,height:30,width:30}} />
                          <Text style={{color:"#808080"}}>yahiamah1999@gmail.com</Text>

                    </View>
          
               

                 <View   >
                 <Image source={require('../../assets/next_g.png')} style={{alignSelf:"center",height:20,width:20}}  />

                 </View>
                 </View>
            </TouchableOpacity>
        </View>
        <View style={{borderBottomColor:"#E0E0E0",borderBottomWidth:1}} >
            <TouchableOpacity>
                <View  style={GlobalStyles.compte_g} >
                    <View style={GlobalStyles.compte}>
                          <Image source={require('../../assets/userr.png')}  style={{alignSelf:"center",marginHorizontal:9,height:30,width:30}} />
                          <Text style={{color:"#808080"}}>Mes reservations</Text>

                    </View>
          
               

                 <View   >
                 <Image source={require('../../assets/next_g.png')} style={{alignSelf:"center",height:20,width:20}}  />

                 </View>
                 </View>
            </TouchableOpacity>
        </View>
        <View style={styles.view1}>
          <Text style={styles.text1} >MA PHARMACIE REFERENTE </Text>
        </View>
        <View style={{borderBottomColor:"#E0E0E0",borderBottomWidth:1}} >
            <TouchableOpacity  onPress={()=>navigation.navigate('fav')}>
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
          
               

                 <View   >
                 <Image source={require('../../assets/next_g.png')} style={{alignSelf:"center",height:20,width:20}}  />

                 </View>
                 </View>
            </TouchableOpacity>
        </View>
        <View style={styles.view1}>
          <Text style={styles.text1} >MES ADRESSES ENREGISTREES </Text>
        </View>
        <View style={{borderBottomColor:"#E0E0E0",borderBottomWidth:1}} >
            <TouchableOpacity>
                <View  style={GlobalStyles.compte_g} >
                    <View style={GlobalStyles.compte}>
                        <View style={{borderWidth:2,borderColor:'#E9E9E9',borderRadius:100,paddingVertical:9,backgroundColor:'#F2F2F2',marginLeft:9}} >
                        <Image source={require('../../assets/home_c.png')}  style={{marginHorizontal:9,height:20,width:20,borderRadius:100,}} />

                        </View>
                        <View style={{marginLeft:5}}>
                        <Text >DOMICILE</Text>
                        </View>
                        


                    </View>
          
               

                 <View   >
                 <Image source={require('../../assets/next_g.png')} style={{alignSelf:"center",height:20,width:20}}  />

                 </View>
                 </View>
            </TouchableOpacity>
        </View>
        <View style={{borderBottomColor:"#E0E0E0",borderBottomWidth:1}} >
            <TouchableOpacity>
                <View  style={GlobalStyles.compte_g} >
                    <View style={GlobalStyles.compte}>
                        <View style={{borderWidth:2,borderColor:'#E9E9E9',borderRadius:100,paddingVertical:9,backgroundColor:'#F2F2F2',marginLeft:9}} >
                        <Image source={require('../../assets/work_c.png')}  style={{marginHorizontal:9,height:20,width:20,borderRadius:100,}} />

                        </View>
                        <View style={{marginLeft:5}}>
                        <Text >Travail</Text>
                        </View>
                        


                    </View>
          
               

                 <View   >
                 <Image source={require('../../assets/next_g.png')} style={{alignSelf:"center",height:20,width:20}}  />

                 </View>
                 </View>
            </TouchableOpacity>
        </View>
        <View style={styles.view1}>
          <Text style={styles.text1} >SUIVI DE VOS RESERVATIONS </Text>
        </View>
        <View style={{borderBottomColor:"#E0E0E0",borderBottomWidth:1}} >
            
                <View  style={GlobalStyles.compte_g} >
                    <View style={GlobalStyles.compte}>
                        
                        <View style={{marginLeft:5}}>
                        <Text >Par notification push</Text>
                        </View>
                        


                    </View>
          
               

                 <View   >
                 <ToggleSwitch
  onColor="#008A00"
  offColor='#F2F2F2'
 
  size="large"
  
/>

                 </View>
                 </View>
            
        </View>
    <View style={{marginVertical:19}}>
    <TouchableOpacity>
    <Text style={{color:"#008A00",alignSelf:"center",fontSize:17,fontWeight:"bold"}}>SE DECONNECTER</Text>
     </TouchableOpacity>
    </View>
    </ScrollView>
      </View>
    );
  }


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
  export default Compte_Home;