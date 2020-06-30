import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import GlobalStyles from '../../assets/Gen_styles';
import { TextInput } from 'react-native-paper';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { observer, inject } from "mobx-react"
import { _auth, _database, _storage } from '../../config/config';

// firebase.initializeApp(firebaseConfig)


@inject('store')
@observer
class Ordon_cont_phar extends React.Component {
  constructor(props) { 
    super(props)
    this.state = {
      item: this.props.route.params,
      com: null,
      url: null,
      cmnt : null,
    }
  } 

  componentDidMount= async () => {
    const imageRef = await _storage.ref(this.state.item.item.id);
    imageRef
      .getDownloadURL()
      .then((url) => {
        this.setState({
          url: url
        })
      });
  }

  Valider = async () => {
    await _database
    .ref('ordonnance')
    .child(this.state.item.item.id)
    .update({
      etat : 'Accepted',
      commentaire : this.state.cmnt
    }).then(() => {
      this.props.navigation.navigate('Home');
    });
  }

  Refuser = async () => {
    await _database
    .ref('ordonnance')
    .child(this.state.item.item.id)
    .update({
      etat : 'rejected',
      commentaire : this.state.cmnt
    }).then(() => {
      this.props.navigation.navigate('Home');
    });
  }
 
  render() {
    return (
      <View style={GlobalStyles.container}>
        <ScrollView> 
        <View style={GlobalStyles.header} >

          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <View>
              <Image source={require('../../assets/back.png')} style={GlobalStyles.back} />
 
            </View>

          </TouchableOpacity>
        </View>
        <View style={{ marginTop: "9%" }} >

          <View style={{ backgroundColor: "white" }} >
            <View style={[GlobalStyles.compte, { flexDirection: 'row', alignItems: "center", }]}>

              <View style={{ marginLeft: "3%" }}>
                <Text style={{ fontSize: 20 }} >ORDONNANCE ID : {this.state.item.item.id} </Text>
                <Text style={{ color: "#808080", marginVertical: 5 }}>Client : {this.state.item.item.prenom_client} {this.state.item.item.nom_client}</Text>
                <Text style={{ color: "#808080", marginVertical: 5 }}>TITRE {this.state.item.item.nom_ordonnance} </Text>
                <Text style={{ color: "#808080", marginVertical: 5 }}>COMMENTAIRE {this.state.item.item.commentaire_ordonnace}</Text>

              </View>



            </View>




            <View style={{ borderTopColor: "#E0E0E0", borderTopWidth: 1 }} >

              <View style={styles.view1}>
                <Text style={styles.text1} >VOTRE COMMENTAIRE </Text>
              </View>
              <View >
                <TextInput style={{
                  backgroundColor: '#E9E9E9',
                  height: 50,
                  paddingBottom: "30%",
                  paddingRight: 0
                }}
                  placeholder="Laissez un commentaire à votre client... (facultatif)"
                  underlineColorAndroid="transparent"
                  onChangeText={(text) => { this.setState({cmnt: text})}}
                />
              </View>
            </View>
            <View style={styles.view1}>
              <Text style={styles.text1} >L'ORDONNANCE</Text>
            </View> 
            <View>
            <Image
        source={{uri: this.state.url }}
       style={{width: 400, height: 400}}
      />
            </View> 
          </View>
          <View style={{ marginVertical: "9%", flexDirection: "row", justifyContent: "space-around" }}>
            <TouchableOpacity 
            onPress={this.Valider}
            >
              <Text style={{ color: "green", alignSelf: "center", fontSize: 17, fontWeight: "bold" }}>VALIDER</Text>
            </TouchableOpacity>


            <TouchableOpacity 
            onPress={this.Refuser}
            >
              <Text style={{ color: "red", alignSelf: "center", fontSize: 17, fontWeight: "bold" }}>REFUSER</Text>
            </TouchableOpacity>
          </View>
        </View>
        </ScrollView>
      </View>
    );
  }
}
export default Ordon_cont_phar;
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

  }

})