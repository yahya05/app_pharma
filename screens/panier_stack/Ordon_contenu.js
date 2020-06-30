import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';
import GlobalStyles from '../../assets/Gen_styles';
import { TextInput } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { observer, inject } from "mobx-react"
import { _auth, _database, _storage } from '../../config/config';


@inject('store')
@observer
export default class Ordon_contenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: this.props.route.params,
      url: null,
      nom: 'marwan',
      ordo: null,
      type: '',
      com: '',        
    }
    }

  componentDidMount = async () => {
    const imageRef = await _storage.ref(this.state.item.item.id);
    imageRef
      .getDownloadURL()
      .then((url) => {
        this.setState({
          url: url
        })
      });
  }

  Delete = async () => {
    let imageRef = await _storage.ref(this.state.item.item.id);
    const arr = []
    var ordonance = _database.ref('ordonnance')
    imageRef
    .delete();
    await _database
    .ref('ordonnance')
    .child(this.state.item.item.id)
    .remove();
    await ordonance.orderByChild("id_client").equalTo(this.props.store.uid).on("child_added", (snap) => {
      arr.push(snap.val());
      this.props.store.set_arr_client(arr)
      console.log(arr)

    })
    this.props.navigation.navigate('Home') 
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
                  <Text style={{ fontSize: 20 }} >ORDONNANCE {this.state.item.item.titre}</Text>
                  <Text style={{ color: "#808080", marginVertical: 5 }}>ID {this.state.item.item.id}</Text>
                  <Text style={{ color: "#808080", marginVertical: 5 }}>ETAT: {this.state.item.item.etat} </Text>
                  <Text style={{ color: "#808080", marginVertical: 5 }}>COMMENTAIRE {this.state.item.item.commentaire} </Text>
                </View>



              </View>

              <View style={{ backgroundColor: "#D0FABF", marginHorizontal: "3%", padding: 6, borderRadius: 5 }}>

                <Text style={{ color: "#808080", fontSize: 15, marginBottom: 2 }}>Pour recuperer votre commande, munissez-vous de </Text>
                <Text style={{ color: "#808080", fontSize: 15 }}>votre ordonnance originale, carte de mutuelle</Text>




              </View>


              <View style={styles.view1}>
                <Text style={styles.text1} >DANS VOTRE PHARMACIE</Text>
              </View>
              <View style={{ borderBottomColor: "#E0E0E0", borderBottomWidth: 1 }} >

                <View style={GlobalStyles.compte_g} >
                  <View style={GlobalStyles.compte}>
                    <View style={{ borderWidth: 2, borderColor: '#E9E9E9', borderRadius: 100, paddingVertical: 9, backgroundColor: '#F2F2F2', marginLeft: 9 }} >
                      <Image source={require('../../assets/FAV.png')} style={{ marginHorizontal: 9, height: 20, width: 20, borderRadius: 100, }} />

                    </View>
                    <View style={{ marginLeft: 5 }}>
                      <Text >{this.props.store.name_pharma}</Text>
                    </View>



                  </View>




                </View>

              </View>
              <View style={styles.view1}>
                <Text style={styles.text1} >VOTRE ORDONNANCE</Text>
              </View>
              <Image
                source={{ uri: this.state.url }}
                style={{ width: 400, height: 400 }}
              />
              <View>

              </View>


            </View>
            <View style={{ marginVertical: 19 }}>
              <TouchableOpacity onPress={this.Delete}>
                <Text style={{ color: "red", alignSelf: "center", fontSize: 17, fontWeight: "bold" }}>SUPPRIMER MA COMMANDE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
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