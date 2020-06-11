import React,{useState} from 'react';
import { ScrollView , View, TouchableHighlight, Text, TextInput, Button,StyleSheet,TouchableWithoutFeedback,Keyboard ,Image,Modal,TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Formik } from 'formik';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import Fontisto from 'react-native-vector-icons/Fontisto';
import GlobalStyles from '../../assets/Gen_styles';

import * as yup from "yup";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const reviewSchema=yup.object({
    nom:yup.string().required().min(4),
    prenom:yup.string().required().min(4),
    ville:yup.string().required().min(4),
    telephone:yup.number().required().min(8),
    adresse:yup.string().required().min(8),
  
    mdp:yup.string().required().min(8),
    cmdp:yup.string().required().min(8).test('password-matching',"Passwords don't match",function(val){
        return val===this.parent.mdp})
})

export default function Userform(props) {
  const [modalOpen,setModalOpen]=useState(false);

    return(
      <View>
        <Modal visible={modalOpen} animationType='slide'>
            <View style={globalStyles.Titrecontainer}>

            <Text style={{  fontWeight:"bold", fontSize:28,color : 'grey' }}>Entrez Votre Pharmacie </Text>
          
                
            </View>
          
       

<GooglePlacesAutocomplete
       placeholder="exemple:pharmacie 'nom de la pharmacie'"

      minLength={7} // minimum length of text to search
      autoFocus={false}
      returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
      listViewDisplayed='true'    // true/false/undefined
      fetchDetails={true}
      renderDescription={row => row.description} // custom description render
      onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      
     
      
      query={{
        // available options: https://developers.google.com/places/web-service/autocomplete
        key: 'AIzaSyAQ4Udmdmd60avwA2FGIPdu39WBtoFmefg',
        language: 'fr', // language of the results
        default: 'geocode',
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
      
      currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
      currentLocationLabel="Current location"
      nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
      GoogleReverseGeocodingQuery={{
        // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
        
      }}
      GooglePlacesSearchQuery={{
        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
        rankby: 'distance',
        type: 'pharmacy'
      }}

      filterReverseGeocodingByTypes={ ["pharmacy", "health", "point_of_interest", "store", "establishment"]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
      

      debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
    /*  renderLeftButton={()  => <Image source={require('path/custom/left-icon')} />}*/
      renderRightButton={() =>   <TouchableOpacity onPress={()=>setModalOpen(false)}>
      <Text style={{color:"#008A00",fontSize:17,fontWeight:"bold",textAlign:"right",marginTop:"13%"}}>SUIVANT</Text>


      </TouchableOpacity>}
    />
            </Modal>
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
                    nom : '',
                    prenom : '',
                    ville : '',
                    adresse : '',
                    telephone : '',
                    
                    mdp : '', 
                    cmdp : '',
                }}
                validationSchema={reviewSchema}
                onSubmit={(values) =>
                {
                   
                        console.log(values);
                        alert('BG');
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
                                <Text style={globalStyles.error}>{props.touched.cmdp && props.errors.cmdp}</Text>
                                <TouchableOpacity onPress={()=>setModalOpen(true)} >
                                <Text style={{color:"#008A00",alignSelf:"center",fontSize:20,fontWeight:"bold",marginVertical:"3%"}}>Votre Pharmacie Référente </Text>
                            </TouchableOpacity>
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
           alignItems:'center',
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
            fontSize:32,
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
            color:'red',
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
