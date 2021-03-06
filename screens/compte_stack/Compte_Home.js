import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import GlobalStyles from '../../assets/Gen_styles';
import { TextInput } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import { ScrollView } from 'react-native-gesture-handler';
import { observer, inject } from "mobx-react";
import { _auth, _database, _storage } from '../../config/config';

@inject('store')
@observer
class Compte_Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nom: 'marwan',
      type: 'USER'
    }
  }

  Deconnecter = async () => {
      try {
        await _auth.signOut()
        this.props.store.login(false)
        this.props.store.set_avatar(null)
        this.props.store.set_key(null)
        this.props.store.setpr(null)
        this.props.store.set_arr_client(null) 
        this.props.store.set_arr_pharma(null) 
        this.props.store.set_test(null) 
        this.props.store.set_ord(null) 
        this.props.store.set_com(null) 
        this.props.store.setphone_pharma(null)
        this.props.store.setid_pharma(null) 
        this.props.store.setname_pharma(null) 
        this.props.store.login(null) 
        this.props.store.setetat(null)  
        this.props.store.setid(null)
        this.props.store.setnom(null)  
        this.props.store.setprenom(null)
        this.props.store.setemail(null)
        this.props.store.settype(null)
      } catch (error) {
        alert('Unable to sign out right now'); 
      }  
  };
 
  render() {
    return (

      <View style={GlobalStyles.container}>
        <ScrollView>

          {this.props.store.loggedin === true ?
            <View>
              <View style={GlobalStyles.header} >
                <Text style={GlobalStyles.title}>MON Compte</Text>
              </View>


              <View style={{ borderBottomColor: "#E0E0E0", borderBottomWidth: 1 }} >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('compte')}>
                  <View style={GlobalStyles.compte_g} >
                    <View style={GlobalStyles.compte}>
                      <Image source={require('../../assets/user_c.png')} style={{ alignSelf: "center", marginHorizontal: 9, height: 30, width: 30 }} />
                      <Text style={{ color: "#808080" }}>{this.props.store.email}</Text>

                    </View>



                    <View   >
                      <Image source={require('../../assets/next_g.png')} style={{ alignSelf: "center", height: 20, width: 20 }} />

                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ borderBottomColor: "#E0E0E0", borderBottomWidth: 1 }} >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Panier')}>
                  <View style={GlobalStyles.compte_g} >
                    <View style={GlobalStyles.compte}>
                      <Image source={require('../../assets/reser.png')} style={{ alignSelf: "center", marginHorizontal: 9, height: 30, width: 30 }} />
                      <Text style={{ color: "#808080" }}>Mes reservations</Text>

                    </View>



                    <View   >
                      <Image source={require('../../assets/next_g.png')} style={{ alignSelf: "center", height: 20, width: 20 }} />

                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              {this.props.store.type == 'pharma' ?
                <View>
                  <View style={styles.view1}>
                    <Text style={styles.text1} >MA PHARMACIE  </Text>
                  </View>
                  <View style={{ borderBottomColor: "#E0E0E0", borderBottomWidth: 1 }} >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Compte_modif_phar')}>
                      <View style={GlobalStyles.compte_g} >
                        <View style={GlobalStyles.compte}>
                          <View style={{ borderWidth: 2, borderColor: '#E9E9E9', borderRadius: 100, paddingVertical: 9, backgroundColor: '#F2F2F2', marginLeft: 9 }} >
                            <Image source={require('../../assets/FAV.png')} style={{ marginHorizontal: 9, height: 20, width: 20, borderRadius: 100, }} />

                          </View>
                          <View style={{ marginLeft: 5 }}>
                            <Text >{this.props.store.name_pharma}</Text>
                          </View>



                        </View>



                        <View   >
                          <Image source={require('../../assets/next_g.png')} style={{ alignSelf: "center", height: 20, width: 20 }} />

                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>

                : <View>
                  <View style={styles.view1}>
                    <Text style={styles.text1} >MA PHARMACIE REFERENTE </Text>
                  </View>
                  <View style={{ borderBottomColor: "#E0E0E0", borderBottomWidth: 1 }} >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('fav')}>
                      <View style={GlobalStyles.compte_g} >
                        <View style={GlobalStyles.compte}>
                          <View style={{ borderWidth: 2, borderColor: '#E9E9E9', borderRadius: 100, paddingVertical: 9, backgroundColor: '#F2F2F2', marginLeft: 9 }} >
                            <Image source={require('../../assets/FAV.png')} style={{ marginHorizontal: 9, height: 20, width: 20, borderRadius: 100, }} />

                          </View>
                          <View style={{ marginLeft: 5 }}>
                              <Text >{this.props.store.name_pharma}</Text>
                          </View>



                        </View>



                        <View   >
                          <Image source={require('../../assets/next_g.png')} style={{ alignSelf: "center", height: 20, width: 20 }} />

                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.view1}>
                    <Text style={styles.text1} >MES ADRESSES ENREGISTREES </Text>
                  </View>
                  <View style={{ borderBottomColor: "#E0E0E0", borderBottomWidth: 1 }} >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('adresse')}>
                      <View style={GlobalStyles.compte_g} >
                        <View style={GlobalStyles.compte}>
                          <View style={{ borderWidth: 2, borderColor: '#E9E9E9', borderRadius: 100, paddingVertical: 9, backgroundColor: '#F2F2F2', marginLeft: 9 }} >
                            <Image source={require('../../assets/home_c.png')} style={{ marginHorizontal: 9, height: 20, width: 20, borderRadius: 100, }} />

                          </View>
                          <View style={{ marginLeft: 5 }}>
                            <Text >DOMICILE</Text>
                          </View>



                        </View>



                        <View   >
                          <Image source={require('../../assets/next_g.png')} style={{ alignSelf: "center", height: 20, width: 20 }} />

                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={{ borderBottomColor: "#E0E0E0", borderBottomWidth: 1 }} >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('adresse')}>
                      <View style={GlobalStyles.compte_g} >
                        <View style={GlobalStyles.compte}>
                          <View style={{ borderWidth: 2, borderColor: '#E9E9E9', borderRadius: 100, paddingVertical: 9, backgroundColor: '#F2F2F2', marginLeft: 9 }} >
                            <Image source={require('../../assets/work_c.png')} style={{ marginHorizontal: 9, height: 20, width: 20, borderRadius: 100, }} />

                          </View>
                          <View style={{ marginLeft: 5 }}>
                            <Text >Travail</Text>
                          </View>



                        </View>



                        <View   >
                          <Image source={require('../../assets/next_g.png')} style={{ alignSelf: "center", height: 20, width: 20 }} />

                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>}

              <View style={styles.view1}>
                <Text style={styles.text1} >SUIVI DE VOS RESERVATIONS </Text>
              </View>
              <View style={{ borderBottomColor: "#E0E0E0", borderBottomWidth: 1 }} >

                <View style={GlobalStyles.compte_g} >
                  <View style={GlobalStyles.compte}>

                    <View style={{ marginLeft: 5 }}>
                      <Text >Par notification push</Text>
                    </View>



                  </View>



                  <View   >

                  </View>
                </View>

              </View>
              <View style={{ marginVertical: 19 }}>
                <TouchableOpacity onPress={this.Deconnecter}>
                  <Text style={{ color: "#008A00", alignSelf: "center", fontSize: 17, fontWeight: "bold" }}>SE DECONNECTER</Text>
                </TouchableOpacity>
              </View>
            </View>
            :

            <View >
              <View>

                <View style={{
                  alignItems: 'center',
                  borderRadius: 10,
                  alignSelf: "center",
                  backgroundColor: 'white',
                  paddingVertical: 5,
                  padding: 30,
                  marginTop: "60%",
                  borderColor: '#E9E9E9',
                  borderWidth: 1
                }} >
                  <View style={GlobalStyles.sugges}>
                    <Text style={GlobalStyles.conn}> Pour bénéficier de la totalité des</Text>
                    <Text style={GlobalStyles.conn}>  fonctionnalités de votre pharmacien,</Text>

                    <Text style={GlobalStyles.conn}> Veuillez-vous connecter</Text>

                  </View>

                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Connect')}>
                    <View style={GlobalStyles.buttonb}>
                      <Text style={GlobalStyles.buttonText}>Se Connecter</Text>

                    </View>

                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('pasdecompte')}>
                    <Text style={{ color: "#008A00", fontSize: 16, fontWeight: 'bold', marginTop: 10, marginBottom: 20, }}>VOUS N'AVEZ PAS DE COMPTE?</Text>

                  </TouchableOpacity>

                </View>
              </View>
            </View>}
        </ScrollView>
      </View >
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
export default Compte_Home;