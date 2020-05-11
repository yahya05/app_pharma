import React,{useState} from 'react';
import { StyleSheet, Text, View,Button,Image } from 'react-native';
import GlobalStyles from '../assets/Gen_styles';
import { TextInput } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Detail=({navigation}) =>{
    return (
      <View style={GlobalStyles.container}>
      <View style={GlobalStyles.header} >

        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <View>
        <Image source={require('../assets/back.png')} style={GlobalStyles.back}  />

        </View>

        </TouchableOpacity>
        </View>
    </View>
    );
  }
  export default Detail;