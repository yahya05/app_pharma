import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import GlobalStyles from '../../assets/Gen_styles';
import { TextInput } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import { ScrollView } from 'react-native-gesture-handler';
import { _auth, _database, _storage } from '../../config/config';
import { observer, inject } from "mobx-react";

@inject('store')
@observer
class Compte_modif_phar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.store.uid,
            adresse: this.props.store.add,
            tel: this.props.store.phone_pharma,
            nom: this.props.store.name_pharma
        }
    }

    Update = async () => {
        const adresse = this.state.adresse
        const tel = this.state.tel
        const nom = this.state.nom
        await _database.ref('users').orderByChild("id_Pharma").equalTo(this.props.store.id_pharma).once('value', function (snapshot) {
            snapshot.forEach(function (child) {
                child.ref.update({
                    adresse_Pharma: adresse,
                    phone_Pharma: tel,
                    nom_Pharma: nom
                })
            })
        })
        this.props.store.setname_pharma(nom)
        this.props.store.setphone_pharma(tel)
        this.props.store.set_add(adresse)
        this.props.navigation.navigate('Compte_Home')
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

                    <View style={{ marginHorizontal: "15%" }} >
                        <Text style={{ fontWeight: "bold", textAlign: "center", fontSize: 18, marginTop: 18 }} >MODIFIER LES INFO DE VOTRE </Text>
                        <Text style={{ marginBottom: 18, fontSize: 18, fontWeight: "bold", textAlign: "center", }} >PHARMACIE</Text>

                    </View>


                </View>

                <ScrollView>

                    <View style={{ marginBottom: 20 }}>
                        <Image source={require('../../assets/HH.png')} style={{ alignSelf: "center", height: 200, width: 200 }} />

                        <Text style={{ color: 'grey', fontSize: 19, paddingLeft: 3, textAlign: "center" }}>
                            NOM PHARMACIE
            </Text>
                    </View>
                    <View  >
                        <TextInput style={{ backgroundColor: 'white' }}
                            underlineColorAndroid="transparent" defaultValue={this.state.nom}
                            onChangeText={(text) => this.setState({ nom: text })}

                        />
                        <TextInput style={{ backgroundColor: 'white' }}
                            underlineColorAndroid="transparent" defaultValue={this.state.adresse}
                            onChangeText={(text) => this.setState({ adresse: text })}

                        />
                        <TextInput style={{ backgroundColor: 'white' }}
                            underlineColorAndroid="transparent" defaultValue={this.state.tel}
                            onChangeText={(text) => this.setState({ tel: text })}

                        />

                        <TouchableOpacity onPress={this.Update} >
                            <View style={GlobalStyles.buttonb_C}>
                                <Text style={GlobalStyles.buttonText}>SAUVGARDER</Text>

                            </View>

                        </TouchableOpacity>



                    </View>
                </ScrollView>

            </View>
        );
    }
}

export default Compte_modif_phar;