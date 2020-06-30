import React , { Component } from 'react'
import { StyleSheet, Text, View,Button,TouchableOpacity,Image } from 'react-native';
import GlobalStyles from '../../assets/Gen_styles';
import { TextInput } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import { observer , inject  } from "mobx-react"
import { _auth, _database, _storage } from '../../config/config';


@inject('store')
@observer
class Compte_mdp extends React.Component{
  constructor(props){
    super(props)
    this.state={
      id : this.props.store.uid,
      mdp: null,
      cmdp : null
    }   
  }

  Update = async () => {
    if( this.state.mdp === this.state.cmdp ) {
    const uid = this.state.id
    await _auth
    .currentUser
    .updatePassword(this.state.mdp.trim())
    .then(() => _database
    .ref('users')
    .child(uid)
    .update({
      motdepasse: this.state.mdp,
    })
    )
  }else{
    alert('error')
  }
};

render() {
    return (
      <View style={GlobalStyles.container}>
      <View style={GlobalStyles.header_B} >
      
      <View  style={GlobalStyles.header_Back}  >

        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
        <Image source={require('../../assets/back.png')} style={GlobalStyles.back}  />

        </TouchableOpacity>
        </View>

<View style={GlobalStyles.title_Back} >
<Text style={GlobalStyles.title} >MODIFIER MOT DE PASSE</Text>

</View>


        </View>
        <View  >
         
        <TextInput style={{backgroundColor:'white'}}  placeholder="Nouveau mot de passe" 
        underlineColorAndroid="transparent"
        secureTextEntry ={true}
        onChangeText={(text) => { this.setState({mdp: text})}}

            />
              <TextInput style={{backgroundColor:'white'}} placeholder="Confirmation du mot de passe" 
        underlineColorAndroid="transparent"
        secureTextEntry ={true}
        onChangeText={(text) => { this.setState({cmdp: text})}}

            />
            <Text  style={{fontSize:12,fontWeight:"bold",color:"grey",padding:5}}>Votre mot de passe doit contenir au oins 8 caracteres, au minimum une majuscule, une minuscule, un chiffre et un caractere special</Text>
          </View>
          <TouchableOpacity onPress={this.Update}  >
        <View style={GlobalStyles.buttonb_C}>
            <Text style={GlobalStyles.buttonText}>SAUVGARDER</Text>
            
        </View>
        
    </TouchableOpacity>

    </View>
    );
  }
}
  export default Compte_mdp;