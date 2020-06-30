import React,{ Component} from 'react';
import { ScrollView ,YellowBox, View, TouchableHighlight, Text, TextInput, Button,StyleSheet,TouchableWithoutFeedback,Keyboard,Image ,Modal,TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Formik } from 'formik';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as yup from "yup";
import _ from 'lodash';
import { _auth, _database} from '../../config/config';
import Icon from 'react-native-vector-icons/AntDesign';
import GlobalStyles from '../../assets/Gen_styles';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

// const reviewSchema=yup.object({
//     nom:yup.string().required().min(4),
//     prenom:yup.string().required().min(4),
//     ville:yup.string().required().min(4),
//     telephone:yup.number().required().min(8),
//     adresse:yup.string().required().min(8),
//     nom_phar:yup.string().required().min(4),
//     adresse_pharm:yup.string().required().min(8),
//     fixe:yup.number().required().min(8),
//     mdp:yup.string().required().min(8),
//     cmdp:yup.string().required().min(8).test('password-matching',"Passwords don't match",function(val){
//         return val===this.parent.mdp})
// })

export default class Pharm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      nom: '',
      prenom: '',
      email: '',
      password: '',
      telephone: '',
      ville: '',
      isLoading: false,
      type: 'pharma',
      id_Pharma: '',
      nom_Pharma: '',
      adresse_Pharma: '',
      phone_Pharma: '',
      lat: '',
      lng: '',
    };
  }
render() {
  return(
      <View>
        {/* <Modal visible={this.state.modalOpen} animationType='slide'>
            <View style={globalStyles.Titrecontainer}>

            <Text style={{  fontWeight:"bold", fontSize:28,color : 'grey' }}>Entrez Votre Pharmacie </Text>
          
                
            </View>
            <TouchableOpacity onPress={()=>this.setState({modalOpen : false})}>
        <Text style={{color:"#008A00",fontSize:17,fontWeight:"bold",textAlign:"right"}}>ANNULER</Text>


        </TouchableOpacity>
        <GooglePlacesAutocomplete
      placeholder='Search'
      minLength={7} // minimum length of text to search
      autoFocus={false}
      returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
      listViewDisplayed='false'
      onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
      this.setState({
        lat: details.geometry.location.lat,
        lng: details.geometry.location.lng,
        id_Pharma: details.id,
        nom_Pharma: details.name,
        adresse_Pharma: details.formatted_address,
        phone_Pharma: details.formatted_phone_number
      })
    }}
      query={{
        key: 'AIzaSyAQ4Udmdmd60avwA2FGIPdu39WBtoFmefg',
        language: 'fr', // language of the results
        components: 'country:MA',
        types:  ["pharmacy", "health", "point_of_interest", "store", "establishment"]
      }}
      styles={{
        textInputContainer: {
          width: '100%'
        },
        description: {
          fontWeight: 'bold'
        },
       
      }}
      debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.

    />
            </Modal> */}
<ScrollView>
<TouchableWithoutFeedback onPress={Keyboard.dismiss} >
    
        <View style={globalStyles.container}>
        
          
            <View style={globalStyles.Titrecontainer}>
            <Image source={require('../../assets/logo.png')}  style={{marginBottom:5}} />

            <Text style={globalStyles.Titre}>LePharmacien</Text>
          
                
            </View>
            

            <View >
                <Formik
                initialValues = {{ 
                  nom: '',
                  prenom: '',
                  ville: '',
                  adresse: '',
                  telephone: '',
                  type: '',
                  mdp: '',
                  cmdp: '',
                }}
                // validationSchema={reviewSchema}
                onSubmit={
                  async (values) => {
                    this.setState({
                      nom: values.nom,
                      prenom: values.prenom,
                      email: values.email,
                      ville: values.ville,
                      telephone: values.telephone,
                      password: values.mdp
                    });
                    if (this.state.email && this.state.password) {
                      this.setState({ isLoading: true });
                      try {
                        const response = await _auth
                          .createUserWithEmailAndPassword(this.state.email, this.state.password);
                        if (response) {
                          const user = await _database
                            .ref('users/')
                            .child(response.user.uid)
                            .set({
                              motdepasse: this.state.password,
                              nom: this.state.nom,
                              prenom: this.state.prenom,
                              email: this.state.email,
                              telephone: this.state.telephone,
                              type: this.state.type,
                              // id_Pharma: this.state.id_Pharma,
                              // ville_Pharma: this.state.adresse_Pharma,
                              // nom_Pharma: this.state.nom_Pharma,
                              // adresse_Pharma : this.state.adresse_Pharma,
                              // phone_Pharma: this.state.phone_Pharma,
                              // lat: this.state.lat,
                              // lng: this.state.lng
                            })
                            .then(() => this.props.navigation.navigate('Loading'))
                        }
                      } catch (error) {
                        this.setState({ isLoading: false });
                        alert('Signup failed')
                      }
                    }
                  }
                }
                >
                    {(props) => (
                        <View style={globalStyles.Formikcontainer}>
                            <View style={globalStyles.inputContainer} >
                                <MaterialCommunityIcons name="account" style={globalStyles.inputIcon} />
                                <TextInput 
                                style={globalStyles.inputs}
                                placeholder='Votre Nom'
                                onChangeText={props.handleChange('nom')}
                                value={props.values.nom}
                                onBlur={props.handleBlur('nom')}
                                />
                                
                                </View>
                              
                                <Text style={globalStyles.error}>{props.touched.nom && props.errors.nom}</Text>
                            
                            <View style={globalStyles.inputContainer} >
                                <MaterialCommunityIcons name="account" style={globalStyles.inputIcon} />
                                <TextInput 
                                style={globalStyles.inputs}
                                placeholder='Votre Prenom'
                                onChangeText={props.handleChange('prenom')}
                                value={props.values.prenom}
                                onBlur={props.handleBlur('prenom')}
                                />
                                </View>
                                <Text style={globalStyles.error}>{props.touched.prenom && props.errors.prenom}</Text>
                                <View style={globalStyles.inputContainer} >
                                <MaterialCommunityIcons name="account" style={globalStyles.inputIcon} />
                                <TextInput 
                                style={globalStyles.inputs}
                                placeholder='Votre email'
                                onChangeText={props.handleChange('email')}
                                value={props.values.email}
                                onBlur={props.handleBlur('email')}
                                />
                                </View>
                                
                                <Text style={globalStyles.error}>{props.touched.prenom && props.errors.prenom}</Text>
                            <View style={globalStyles.inputContainer} >
                                <MaterialCommunityIcons name="city" style={globalStyles.inputIcon} />
                                <TextInput 
                                style={globalStyles.inputs}
                                placeholder='Votre Ville'
                                onChangeText={props.handleChange('ville')}
                                value={props.values.ville}
                                onBlur={props.handleBlur('ville')}
                                    />
                           
                                </View>
                                <Text style={globalStyles.error}>{props.touched.ville && props.errors.ville}</Text>
                            <View style={globalStyles.inputContainer} >
                                <Foundation name="telephone" style={globalStyles.inputIcon} />
                                <TextInput 
                                style={globalStyles.inputs}
                                placeholder='Votre Numéro de telephone'
                                onChangeText={props.handleChange('telephone')}
                                value={props.values.telephone}
                                keyboardType="numeric"
                                onBlur={props.handleBlur('telephone')}
                                />
                                
                            </View>
                            <Text style={globalStyles.error}>{props.touched.telephone && props.errors.telephone}</Text>

                            <View style={globalStyles.inputContainer} >
                                <Fontisto name="key" style={globalStyles.inputIcon} />
                                <TextInput 
                                style={globalStyles.inputs}
                                placeholder='Mot de passe'
                                onChangeText={props.handleChange('mdp')}
                                value={props.values.mdp}
                                secureTextEntry={true}
                                  onBlur={props.handleBlur('mdp')}
                                />
                                </View>
                                <Text style={globalStyles.error}>{props.touched.mdp && props.errors.mdp}</Text>
                            
                         
                            <View style={globalStyles.inputContainer}>
                                <Fontisto name="key" style={globalStyles.inputIcon} />
                                <TextInput 
                                style={globalStyles.inputs}
                                placeholder='Confirmer votre Mot de passe'
                                onChangeText={props.handleChange('cmdp')}
                                value={props.values.cmdp}
                                secureTextEntry={true}
                                onBlur={props.handleBlur('cmdp')}
                                />
                                </View>
                                <Text style={{ color:'green',
            textAlign:'center',
            
            fontWeight:'bold',}}>{props.touched.cmdp && props.errors.cmdp}</Text>
                                {/* <TouchableOpacity onPress={()=>this.setState({modalOpen : true})} >
                                <Text style={{color:"#008A00",alignSelf:"center",fontSize:20,fontWeight:"bold",marginVertical:"3%"}}>Votre Pharmacie </Text>
                            </TouchableOpacity> */}
                            <TouchableHighlight onPress={props.handleSubmit } >
                            <View style={GlobalStyles.buttonb_C}>
            <Text style={GlobalStyles.buttonText}>S'inscrire</Text>
            
        </View>
                            </TouchableHighlight>
                        </View>
                    )}
                </Formik>
               
            </View>
           
        </View>
        
        </TouchableWithoutFeedback>
        </ScrollView>
        </View>
    
    )
}
}   
        
  const globalStyles=StyleSheet.create({
    
        container: {
            justifyContent: 'center',
            alignItems: 'center',
           
            flex:1,
            
          },
          inputContainer: {
              borderWidth : 2,
              borderRadius:  60,
              borderColor : 'green',
            //paddingVertical:'5%',
              marginBottom:'1%',
              flexDirection: 'row',
              alignItems:'center',
              borderColor:'white',
              backgroundColor:'white',
            //  height:34,
             
          },
          Titrecontainer : {
        
          marginTop:'8%',           
           alignItems: 'center',
           flexDirection:'row',
           justifyContent:"center"
          },
          image:{
              resizeMode:'center',
          },
          Formikcontainer : {
            justifyContent:'center',
            alignItems:'center',   
          },
          Titre : {
            fontWeight:"bold",
            fontSize:28,
            color : 'green' 
          },
          
          inputs:{
            //  height:24,
              paddingLeft : 8,
              borderLeftWidth : 2,
             // paddingVertical:4,
              borderLeftColor : 'green',
              width:'75%',
             
          },
          inputIcon:{
            paddingTop : 10,
            width:30,
            height:30,
            marginLeft:15,
            justifyContent: 'center',
            color : 'green'
        },
          buttonContainer: {
            height:45,
            
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom:20,
            width:250,
            borderRadius:30,
        
            
          },
          error:{
            color:'green',
            textAlign:'center',
            marginBottom:'5%',
            fontWeight:'bold',
            
          },
          loginButton: {
            backgroundColor: 'green',
          },
          loginText: {
            color: 'white',
          }
    });

  
