import React,{useState} from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity,Image,ScrollView } from 'react-native';
import GlobalStyles from '../../assets/Gen_styles';
import { TextInput } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import MapViewDirections from'react-native-maps-directions'
import { observer , inject  } from "mobx-react";

@inject('store')
@observer
class Compte_refe extends React.Component{
  constructor(props){
    super(props)
    this.state={
      lat:null,
      long:null,
      places:[],
      open:null,
      latitude:this.props.store.lat,
      longitude:this.props.store.lng,
      etat:null,
      name:null,
      adress:null,
      garde : null
    }
    
  }
  UNSAFE_componentWillMount(){
    
        this.getPlaces()
    if (this.props.store.toggle === true ) {
      this.setState({
        garde : 'ouvert'
      })
    }else{
      this.setState({
        garde : 'fermée'
      })
    }
      }
    
  
  getPlaces=()=>{
    const url=this.getUrlWithParameters(this.state.latitude,this.state.longitude,5,'pharmacy','AIzaSyAQ4Udmdmd60avwA2FGIPdu39WBtoFmefg')  
  fetch(url)
  .then((data)=>data.json())
  .then((res)=>{
    const arrayMarker=[];
    res.results.map((element,i)=>{
      { try {
        if(element.opening_hours.open_now)
        var etat="etat=ouverte"
        else 
        var etat="etat=fermée"

      } catch (error) {
        var etat="non declaree"
      }}
      this.setState({adress:element.vicinity})
     
      this.setState({etat:etat})
      this.setState({name:element.name})
   
     arrayMarker.push(
       
       <Marker 
       key={i}
       coordinate= {{
         latitude:this.state.latitude,
         longitude:this.state.longitude,
    
       }}
       title={element.name}
    />
          
     )
     
    })
    this.setState({places:arrayMarker})
  })
}
  
  
  
  getUrlWithParameters=(lat,long,radius,type,API)=>{
    const url='https://maps.googleapis.com/maps/api/place/nearbysearch/json?';
    const location=`location=${lat},${long}&radius=${radius}`;
    const typeData=`&type=${type}`;
    const key=`&key=${API}`;


    return (`${url}${location}${typeData}${key}`);
  }
render(){
    return (
      <View style={GlobalStyles.container}>
      <View style={GlobalStyles.header_B} >
      
      <View  style={GlobalStyles.header_Back}  >

        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
        <Image source={require('../../assets/back.png')} style={GlobalStyles.back}  />

        </TouchableOpacity>
        </View>

<View style={GlobalStyles.title_Back} >
<Text style={GlobalStyles.title} >MA PHARMACIE REFERENTE </Text>

</View>


        </View>
        <ScrollView>
        <View style={{backgroundColor:"white",borderBottomColor:"#E0E0E0",borderBottomWidth:1}}  >
         
        <Image source={require('../../assets/phar_fav.jpg')} style={{height:230,width:"100%"}} />
         
        
<Text style={{fontSize:25,padding:"4%"}} >{this.state.name}</Text>
           
          </View>
          <View style={{backgroundColor:"white",borderBottomColor:"#E0E0E0",borderBottomWidth:1}}  >
         
        
          
         
        <Text style={{color:"red",padding:"4%"}} >{this.state.garde} </Text>
            
           </View>
           <View style={{backgroundColor:"white",borderBottomColor:"#E0E0E0",borderBottomWidth:1}}  >
         
         <Text style={{color:"grey",padding:"4%"}} >Adresse:{this.props.store.add}</Text>

             
            </View>
            <View style={{backgroundColor:"white",borderBottomColor:"#E0E0E0",borderBottomWidth:1}}  >
         
        
          
         
         <Text style={{color:"grey",padding:"4%",fontSize:16}} >{this.props.store.phone_pharma}</Text>

             
            </View>

            <View style={{marginVertical:19}}>
    <TouchableOpacity  onPress={()=>this.props.navigation.navigate('modifav')}>
    <Text style={{color:"#008A00",alignSelf:"center",fontSize:17,fontWeight:"bold"}}>MODIFIER MA PHARMACIE REFERENTE</Text>
     </TouchableOpacity>
    </View>
    <View>
     {this.state.latitude ?   <MapView
        provider={PROVIDER_GOOGLE}
          style={styles.map}
          loadingEnabled
          showsUserLocation
          initialRegion={{
            latitude:this.state.latitude,
            longitude:this.state.longitude,
            latitudeDelta:0.0222,
            longitudeDelta:0.0221
           } }>
       
              {this.state.places}
         

           </MapView>: null}
           </View>
           </ScrollView>

    </View>
    
    );
  }}
  export default Compte_refe;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    map: {
      height: 250,
      width: '100%',
    },
  });