import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import GlobalStyles from '../../assets/Gen_styles';
import Feather from 'react-native-vector-icons/Feather';
import ImagePicker from 'react-native-image-picker';
import { TextInput } from 'react-native-paper';
import { observer, inject } from "mobx-react"
import { _auth, _database, _storage } from '../../config/config';


@inject('store')
@observer
class Ordon extends React.Component {
  constructor(props){
    super(props)
  this.state = {
    avatarSource: null,
    nom : null,
    id : null,
    com : null,
  }
}


  selectImage = async () => {
    ImagePicker.showImagePicker({ noData: true, mediaType: "photo" }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        this.setState({
          avatarSource: response.uri,
        });
      }
    });
  }

  onPress = async () => {      
      const ref = await _database
      .ref('ordonnance/');
      const push = await ref
      .push({
          prenom_client : this.props.store.nom,
          nom_client : this.props.store.prenom,
          id_pharma : this.props.store.id_pharma,
          id_client : this.props.store.uid,
          etat : 'transmis',
          nom_ordonnance : this.state.nom,
          commentaire_ordonnace : this.state.com,
        })
        .then(async pushed_user => {
          ref.child(pushed_user.key).update({"id": pushed_user.key});
          this.props.store.set_key(pushed_user.key)
          this.props.store.set_avatar(this.state.avatarSource)
      });
      this.props.navigation.navigate('Loading')
    }
  

  render() {
    return (
      <View style={GlobalStyles.container}>
        <View style={GlobalStyles.header_B} >

          <View style={GlobalStyles.header_Back}  >

            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image source={require('../../assets/back.png')} style={GlobalStyles.back} />

            </TouchableOpacity>
          </View>

          <View style={{ marginLeft: "22%" }} >
            <Text style={GlobalStyles.title} >ENVOI D'ORDONNANCE</Text>

          </View>


        </View>
        <View style={styles.view1}>
          <Text style={styles.text1} >PHOTOS DE VOTRE ORDONNANCE </Text>
        </View>
        <View  >
          <View style={{
            flexDirection: 'row',

            alignItems: "center",
            backgroundColor: "white",
          }} >
            {this.state.avatarSource && <Image source={{ uri: this.state.avatarSource }} style={{ width: 50, height: 50, resizeMode: "contain" }} />}

            <TouchableOpacity onPress={this.selectImage}>
              <View style={{ padding: 10 }}>
                <Image source={require('../../assets/reser.png')} style={{ alignSelf: "center", marginHorizontal: 9, height: 60, width: 60 }} />

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
          <View style={GlobalStyles.compte_g} >




            <TextInput 
            style={{ backgroundColor: 'white' }} 
            placeholder="Exemple:Pour enfants(facultatif)"
            underlineColorAndroid="transparent"
            onChangeText={(text) => { this.setState({ nom: text})}}
            />
          </View>
        </View>
        <View style={styles.view1}>
          <Text style={styles.text1} >VOTRE COMMENTAIRE </Text>
        </View>
        <View >
          <View style={GlobalStyles.compte_g} >


            <TextInput 
            style={{ backgroundColor: 'white', height: 50, paddingBottom: "30%", paddingRight: 0 }}
            placeholder="Laissez un commentaire à votre client... (facultatif)"
            underlineColorAndroid="transparent"
            onChangeText={(text) => { this.setState({ com: text})}}
            />
          </View>

          <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={this.onPress}>
            <Text style={styles.loginText}>VALIDER</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Ordon;
const styles = StyleSheet.create({
  text1: {
    color: 'grey',
    fontSize: 16,
    paddingLeft: 3
  },
  view1: {
    marginTop: 15,
    marginLeft: 9,
    marginBottom: 8,


  },
  text2: {
    fontSize: 13,
    textAlign: "center",

  }, loginButton: {
    backgroundColor: 'green',
  },
  loginText: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  buttonContainer: {
    height: 45,
    marginLeft: '10%',
    marginTop: '10%',

    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 300,
    borderRadius: 30,


  },
})
