import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, Switch, Image, ScrollView, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import GlobalStyles from '../assets/Gen_styles';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import { Linking } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { _database } from '../config/config';
import { observer, inject } from "mobx-react"
import { observable, action } from 'mobx' 

@inject('store')
@observer
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedin: false,
      user: {},
      currentUser: null,
      nom: null,
      prenom: '',
      email: '',
      telephone: '',
      lat: null,
      long: null,
      places: [],
      open: null,
      toggle: null,
      latitude: 33.5705099,
      longitude: -7.579025800000001,
      etat: false,
      name: null,
      adress: null,
      num: '05222',
      type: null,
      people: [{ name: 'CORONA', date: '14/10/1998', titre: "Faire ses courses au temps du Covid-19", key: '1' },
      { name: 'CORONA', date: '14/10/1998', titre: "Faire ses courses au temps du Covid-19", key: '2' },
      { name: 'CORONA', date: '14/10/1998', titre: "Faire ses courses au temps du Covid-19", key: '3' }
      ],
    }
  }
  UNSAFE_componentWillMount() {

    this.getPlaces()
  }

  loadData_pharma = async () => {
    const arr = []
    var ordonance = await _database.ref('ordonnance');
    ordonance.orderByChild("id_pharma").equalTo(this.props.store.id_pharma).on("child_added", (snap) => {
      arr.push(snap.val());
      this.props.store.set_arr_pharma(arr)
    }); 

  }

  loadData_client = async () => {
    const arr = []
    var ordonance = _database.ref('ordonnance');
    ordonance.orderByChild("id_client").equalTo(this.props.store.uid).on("child_added", (snap) => {
      arr.push(snap.val());
      this.props.store.set_arr_client(arr)
    });
  }

  componentDidUpdate = async () => {
    const uid = this.props.route.params
    var user = await _database.ref('users');
    const currentUserData = await
      user
        .child(uid.uid)
        .once('value');
    this.setState({
      currentUser: currentUserData.val()
    });
    this.props.store.setemail(this.state.currentUser.email);
    this.props.store.setnom(this.state.currentUser.nom);
    this.props.store.setprenom(this.state.currentUser.prenom);
    this.props.store.setid(uid.uid)
    this.props.store.settype(this.state.currentUser.type)
    this.props.store.setphone_pharma(this.state.currentUser.phone_Pharma)
    this.props.store.setname_pharma(this.state.currentUser.nom_Pharma)
    this.props.store.setid_pharma(this.state.currentUser.id_Pharma)
    this.props.store.setlng(this.state.currentUser.lng)
    this.props.store.setlat(this.state.currentUser.lat)
    this.props.store.set_add(this.state.currentUser.adresse_Pharma)
    if(this.state.toggle === null) {
      this.setState({toggle: this.state.currentUser.etat})
    }
    const toggle = this.state.toggle
    _database.ref('users').orderByChild("id_Pharma").equalTo(this.props.store.id_pharma).once('value', function (snapshot) {
      snapshot.forEach(function (child) {
        child.ref.update({ etat: toggle })
      })
    })
    if(this.props.store.type === 'client') {
      var user = _database.ref('users');
      user.orderByChild("type").equalTo("pharma").on("child_added", (snap) => {
      if(snap.val().id_Pharma == this.state.currentUser.id_Pharma) {
        this.props.store.setpr(true)
      }else{
        this.props.store.setpr(false)
      }
    });
    }
    if (this.props.store.type == 'pharma') {
      this.loadData_pharma()
    } else {
      this.loadData_client()
    }
    this.props.store.set_toggle(this.state.toggle);
    const data_pharma = []
    _database.ref('users').orderByChild("type").equalTo("pharma").once("child_added", function (snapshot) {
      data_pharma.push(snapshot.val().email);
    })
    .then(() => this.props.store.set_data_pharma(data_pharma)
  )};
 
  getPlaces = () => {
    const url = this.getUrlWithParameters(this.state.latitude, this.state.longitude, 5, 'pharmacy', 'AIzaSyAQ4Udmdmd60avwA2FGIPdu39WBtoFmefg')
    fetch(url)
      .then((data) => data.json())
      .then((res) => {
        const arrayMarker = [];
        res.results.map((element, i) => {
          {
            try {


              if (element.opening_hours.open_now)
                var etat = "etat=ouverte"
              else
                var etat = "etat=fermée"

            } catch (error) {
              var etat = "non declaree"
            }
          }
          this.setState({ adress: element.vicinity })

          this.setState({ etat: etat })
          this.setState({ name: element.name })



        })
        this.setState({ places: arrayMarker })
      })
  }



  getUrlWithParameters = (lat, long, radius, type, API) => {
    const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?';
    const location = `location=${lat},${long}&radius=${radius}`;
    const typeData = `&type=${type}`;
    const key = `&key=${API}`;


    return (`${url}${location}${typeData}${key}`);
  }
  render() {

    state = {

      people: [{ name: 'CORONA', date: '14/10/1998', titre: "Faire ses courses au temps du Covid-19", key: '1' },
      { name: 'CORONA', date: '14/10/1998', titre: "Faire ses courses au temps du Covid-19", key: '2' },
      { name: 'CORONA', date: '14/10/1998', titre: "Faire ses courses au temps du Covid-19", key: '3' }
      ],
      nom: null
    }

    return (
      <View style={GlobalStyles.container}>
        <View style={GlobalStyles.header} >
          <Image source={require('../assets/logo.png')} style={{ marginBottom: 5 }} />
          <Text style={{ color: "#008A00", fontWeight: "bold", fontSize: 18 }}> LePharmacien</Text>
        </View>
        <ScrollView>
          {this.props.store.loggedin === true ? this.props.store.type == 'pharma' ? <View style={GlobalStyles.panel_cnx} >

            <View style={{ flexDirection: 'row', alignItems: "center", }} >
              <Image style={{ height: 100, width: 100, borderRadius: 360, paddingRight: "4%" }} source={require('../assets/bg.png')} />
              <View style={{ width: "70%" }} >
                <Text style={{ fontSize: 25 }}>{this.props.store.name_pharma}</Text>

              </View>
            </View>

            <View style={{ marginLeft: "3%" }} >
              <Switch
                trackColor={{false: 'gray', true: 'teal'}}
                thumbColor="white"
                onValueChange={(value) => this.setState({toggle: value})}
                value={this.state.toggle}
              />

              <View style={{ marginLeft: "3%", flexDirection: 'row', alignItems: "center", justifyContent: "space-around" }}>
                <Text style={{ fontSize: 25 }} >{this.props.store.phone_pharma}</Text>

                <FontAwesome color="green" name='phone-square' size={30} />
              </View>

            </View>

            <View style={{ marginTop: "10%", marginBottom: "2%" }}>

              <TouchableOpacity onPress={() => this.props.navigation.navigate('Garde')} >
                <Text style={{ color: "#008A00", alignSelf: "center", fontSize: 17, fontWeight: "bold", paddingBottom: 0 }}>TROUVER UNE PHARMACIE</Text>
                <Text style={{ color: "#008A00", alignSelf: "center", fontSize: 17, fontWeight: "bold", paddingTop: 0 }}>OUVERTE OU DE GARDE</Text>

              </TouchableOpacity>
            </View>
 
          </View> : <View style={GlobalStyles.panel_cnx} >

              <View style={{ flexDirection: 'row', alignItems: "center", }} >
                <Image style={{ height: 100, width: 100, borderRadius: 360, paddingRight: "4%" }} source={require('../assets/bg.png')} />
                <View style={{ width: "70%" }} >
                  <Text style={{ fontSize: 25 }}>{this.props.store.name_pharma}</Text>

                </View>
              </View>

              <View style={{ marginLeft: "3%" }} >

                <View style={{ marginLeft: "3%", flexDirection: 'row', alignItems: "center", justifyContent: "space-around" }}>
                  <Text style={{ fontSize: 25 }} >{this.props.store.phone_pharma}</Text>

                  <FontAwesome color="green" name='phone-square' size={30} onPress={() => { Linking.openURL(`tel:${this.props.store.phone_pharma}`); }} />
                </View>

              </View>

              <View style={{ marginTop: "10%", marginBottom: "2%" }}>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Garde')} >
                  <Text style={{ color: "#008A00", alignSelf: "center", fontSize: 17, fontWeight: "bold", paddingBottom: 0 }}>TROUVER UNE PHARMACIE</Text>
                  <Text style={{ color: "#008A00", alignSelf: "center", fontSize: 17, fontWeight: "bold", paddingTop: 0 }}>OUVERTE OU DE GARDE</Text>

                </TouchableOpacity>
              </View>

            </View> :
            <View>

              <View style={GlobalStyles.panel} >
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
            </View>}

          <View>

            <View style={GlobalStyles.view1}>
              <Text style={GlobalStyles.text1} >Articles </Text>
            </View>


            <View style={{ marginBottom: 20 }} >
              <FlatList
                horizontal={true}
                data={state.people}
                showsHorizontalScrollIndicator={false}

                renderItem={({ item }) => (
                  <View >
                    <TouchableOpacity style={GlobalStyles.article}
                      onPress={() => this.props.navigation.navigate('Detail')}>

                      <Image source={require('../assets/test_legume.jpg')} style={{ height: 150, width: 280, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                      <View  >
                        <Text style={GlobalStyles.sujet} >{item.name}</Text>

                      </View>
                      <View style={GlobalStyles.titre_article_view}  >
                        <Text style={GlobalStyles.titre_article} >{item.titre}</Text>

                      </View>
                      <View   >
                        <Text style={{ margin: 10, color: 'grey' }}  >{item.date}</Text>

                      </View>


                    </TouchableOpacity>
                  </View>
                )}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Home;