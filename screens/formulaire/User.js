import React from 'react';
import { ScrollView , View, TouchableHighlight, Text, TextInput, Button,StyleSheet,TouchableWithoutFeedback,Keyboard ,Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Formik } from 'formik';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import Fontisto from 'react-native-vector-icons/Fontisto';
import GlobalStyles from '../../assets/Gen_styles';

import * as yup from "yup";
import { TouchableOpacity } from 'react-native-gesture-handler';

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
    return(
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
