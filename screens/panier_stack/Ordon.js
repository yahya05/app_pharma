import React,{useState} from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity,Image } from 'react-native';
import GlobalStyles from '../../assets/Gen_styles';
import Feather from 'react-native-vector-icons/Feather';

import ImagePicker from 'react-native-image-picker';
import { TextInput } from 'react-native-paper';



class Ordon extends React.Component {
    state={
        avatarSource:null
    }
    selectImage= async ()=>{
        ImagePicker.showImagePicker({noData:true,mediaType:"photo"}, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
             
          
              // You can also display the image using data:
              // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          
              this.setState({
                avatarSource: response.uri,
              });
            }
          });
    }
render(){
    return (
      <View style={GlobalStyles.container}>
      <View style={GlobalStyles.header_B} >
      
      <View  style={GlobalStyles.header_Back}  >

        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Image source={require('../../assets/back.png')} style={GlobalStyles.back}  />

        </TouchableOpacity>
        </View>

<View style={{ marginLeft:"22%"}} >
<Text style={GlobalStyles.title} >ENVOI D'ORDONNANCE</Text>

</View>


        </View>
        <View style={styles.view1}>
          <Text style={styles.text1} >PHOTOS DE VOTRE ORDONNANCE </Text>
        </View>
        <View  >
                <View  style={{
  flexDirection:'row',
 
  alignItems:"center",
backgroundColor:"white",
}} >
                {this.state.avatarSource && <Image source={{uri:this.state.avatarSource}} style={{ width:50,height:50,resizeMode:"contain"}}/>}

          <TouchableOpacity onPress={this.selectImage}>
              <View style={{padding:10}}>
              <Image source={require('../../assets/reser.png')}  style={{alignSelf:"center",marginHorizontal:9,height:60,width:60}} />

              </View>

          </TouchableOpacity>
               

                 <View   >

                 </View>
                 </View>
          
        </View>

        <View style={styles.view1}>
          <Text style={styles.text1} >NOM DE VOTRE ORDONNANCE </Text>
        </View>
        <View  >
                <View  style={GlobalStyles.compte_g} >
                   
          
               

                <TextInput style={{backgroundColor:'white'}}  placeholder="Exemple:Pour enfants(facultatif)" 
        underlineColorAndroid="transparent"
            />
                 </View>
        </View>
        <View style={styles.view1}>
          <Text style={styles.text1} >VOTRE COMMENTAIRE </Text>
        </View>
        <View >
                <View  style={GlobalStyles.compte_g} >
                   
               
                <TextInput style={{backgroundColor:'white',height:50,paddingBottom:"30%",  paddingRight:0}}  placeholder="Laissez un commentaire à votre client... (facultatif)" 
        underlineColorAndroid="transparent"
            />
                 </View>
                 <TouchableOpacity style={[styles.buttonContainer,styles.loginButton]} o>
                                <Text style={styles.loginText}>VALIDER</Text>
                            </TouchableOpacity>
        </View>
    </View>
    );}
  }
  export default Ordon;
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

    },  loginButton: {
        backgroundColor: 'green',
      },
      loginText: {
        color: 'white',
        textTransform:'uppercase',
        fontWeight:'bold'
      },
      buttonContainer: {
        height:45,
      marginLeft:'10%' , 
      marginTop:'10%' , 

        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:300,
        borderRadius:30,
    
        
      },
  })
