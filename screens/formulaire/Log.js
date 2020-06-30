import React , { Component } from 'react'
import { View, Image ,TouchableHighlight, Text, TextInput,StyleSheet,ScrollView,TouchableWithoutFeedback,Keyboard,TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as yup from 'yup';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto'
import { Formik } from 'formik';
import GlobalStyles from '../../assets/Gen_styles';
import { _auth } from '../../config/config';


const reviewSchema=yup.object({
 email:yup.string().required().min(8),
 password:yup.string().required().min(4),
})

export default class Connect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoading: false
    };
  }
  render() {
  return(
      <View style={GlobalStyles.container}>
        
      <ScrollView>
<TouchableWithoutFeedback onPress={Keyboard.dismiss} >

        
        <View>
        <View style={{  margin:10,flexDirection:'row'}} >

<TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
<View>
<Image source={require('../../assets/back.png')} style={GlobalStyles.back}  />

</View>

</TouchableOpacity>
</View>

            <View style={globalStyles.Titrecontainer}>
                <Image source={require('../../assets/logo.png')}  style={{marginBottom:5}} />
                <Text style={globalStyles.Titre}>LePharmacien</Text>
               
            </View>

            <View style={globalStyles.Formikcontainer}>
                <Formik
                initialValues = {{ email:'', password:''}}
                validationSchema={reviewSchema}
                onSubmit={
                  async (values) =>
                  {
                    this.setState({ 
                    email : values.email,
                    password : values.password,
                     });
                    if (this.state.email && this.state.password) {
                      this.setState({ isLoading: true });
                      try {
                        const response = await _auth
                          .signInWithEmailAndPassword(this.state.email, this.state.password);
                        if (response) {
                          this.setState({ isLoading: false });
                          this.props.navigation.navigate('Loading');
                        }
                      } catch (error) {
                        this.setState({ isLoading: false });
                        alert('email ou mot de passe invalid')
                      }
                    }
                  }
              }
                  >
                    {(props) => (
                        <View>
                            <View style={globalStyles.inputContainer} >
                                <Entypo name="email" style={globalStyles.inputIcon} />
                                <TextInput 
                                style={globalStyles.inputs}
                                placeholder="Email-Adress"
                                
                                onChangeText={props.handleChange('email')}
                                value={props.values.email}
                                keyboardType="email-address"

                                />
                            </View>
                            <Text style={globalStyles.error}>{props.touched.email && props.errors.email}</Text>
                            
                            <View style={globalStyles.inputContainer}>
                            <Fontisto name="key" style={globalStyles.inputIcon} />
                            <TextInput 
                            style={globalStyles.inputs}
                           placeholder='Mot de Passe'
                            onChangeText={props.handleChange('password')}
                            value={props.values.password}
                            secureTextEntry={true}
                            />
                            </View>
                            <Text style={globalStyles.error}>{props.touched.password && props.errors.password}</Text>
                            
                            <TouchableHighlight style={[globalStyles.buttonContainer, globalStyles.loginButton]} onPress={props.handleSubmit}>
                                <Text style={globalStyles.loginText}>Se Connecter</Text>
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
    
 
    inputContainer: {
        borderWidth : 2,
        borderRadius:  60,
        borderColor : 'green',
     paddingVertical:'5%',
        marginBottom:'1%',
        flexDirection: 'row',
        alignItems:'center',
        borderColor:'white',
        backgroundColor:'white',
        height:34,
      
    },
    Titrecontainer : {
      marginBottom:'4%',
    marginTop:'40%',           
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
      fontSize:33,
      color : 'green' 
    },
    
    inputs:{
      height:24,
        paddingLeft : 8,
        borderLeftWidth : 2,
       paddingVertical:4,
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
    marginLeft:'10%' , 
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:300,
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
      textTransform:'uppercase',
      fontWeight:'bold'
    },
})


