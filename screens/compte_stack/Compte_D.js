import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import GlobalStyles from '../../assets/Gen_styles';
import { TextInput } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import { ScrollView } from 'react-native-gesture-handler';
import { observer, inject } from "mobx-react"
import { _auth, _database, _storage } from '../../config/config';


@inject('store')
@observer
class Compte_D extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.store.uid,
      nom: this.props.store.nom,
      prenom: this.props.store.prenom,
      email: this.props.store.email
    }
  }

  Update = async () => {
    const uid = this.state.id
    try {
    await _auth
    .currentUser
    .updateEmail(this.state.email.trim())
    .then(() => _database
    .ref('users')
    .child(uid)
    .update({
      nom: this.state.nom,
      prenom: this.state.prenom,
      email: this.state.email
    }))
    this.props.store.setemail(this.state.email)
    this.props.store.setnom(this.state.nom)
    this.props.store.setprenom(this.state.prenom)
    } 
    catch (error) {
      alert('Email Already exist')
    }

  };

  Delete = async () => {
    _auth.currentUser.delete();
    await _database
    .ref('users')
    .child(this.state.id)
    .remove();
    this.props.store.login(false)
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

          <View style={GlobalStyles.title_Back} >
            <Text style={GlobalStyles.title} >MODIFIER VOTRE COMPTE</Text>

          </View>


        </View>

        <ScrollView>

          <View style={{ marginBottom: 20 }}>
            <Image source={require('../../assets/HH.png')} style={{ alignSelf: "center", height: 200, width: 200 }} />

            <Text style={{ color: 'grey', fontSize: 19, paddingLeft: 3, textAlign: "center" }}>
              0673914985
            </Text>
          </View>
          <View  >
            <TextInput style={{ backgroundColor: 'white' }} defaultValue={this.state.prenom}
              underlineColorAndroid="transparent"
              onChangeText={(text) => this.setState({ prenom: text })}
            />
            <TextInput style={{ backgroundColor: 'white' }} defaultValue={this.state.nom}
              underlineColorAndroid="transparent"
              onChangeText={(text) => this.setState({ nom: text })}
            />
            <TextInput style={{ backgroundColor: 'white' }} defaultValue={this.state.email}
              underlineColorAndroid="transparent"
              onChangeText={(text) => this.setState({ email: text })}
            />
            <View style={{ borderBottomColor: "#E0E0E0", borderBottomWidth: 1 }} >
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Mdp')}>
                <View style={GlobalStyles.compte_g} >
                  <View style={GlobalStyles.compte}>

                    <View style={{ marginLeft: 5 }}>
                      <Text style={{ color: 'grey', fontSize: 16, paddingLeft: 3 }} >Modifier mot de passe</Text>
                    </View>



                  </View>



                  <View   >
                    <Image source={require('../../assets/next_g.png')} style={{ alignSelf: "center", height: 20, width: 20 }} />

                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={this.Update}  >
              <View style={GlobalStyles.buttonb_C}>
                <Text style={GlobalStyles.buttonText}>SAUVGARDER</Text>

              </View>

            </TouchableOpacity>


            <View style={{ marginVertical: 19 }}>
              <TouchableOpacity onPress={this.Delete} >
                <Text style={{ color: "red", alignSelf: "center", fontSize: 17, fontWeight: "bold" }}>SUPPRIMER MON COMPTE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

      </View>
    );
  }
}
export default Compte_D;