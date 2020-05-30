import React,{useState} from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity,Image,FlatList } from 'react-native';
import GlobalStyles from '../../assets/Gen_styles';
import { TextInput } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import { SearchBar } from 'react-native-elements';



class Garde_D extends React.Component{
  constructor(){
    super()
    this.state={
  
      city: [  {name:'Agadir', key:'1',latitude : 27.8778,longitude : '-15.5204'},
      {name:'AitMelloul', key:'2',latitude:30.3342,longitude: -9.4972},
      {name:'Al Hoceima', key:'3',latitude:' 35,25',longitude:' -3,9333'},
      {name:'Azemmour', key:'4',longitude:'33,2878',latitude:'-8,3422'},
      {name:'Benslimane', key:'5',latitude:'33,619',longitude:' -7,1306'},
      {name:'Berkane', key:'6',latitude:' 34,9167',longitude:'-2,3167'},
      {name:'Berrechid', key:'7',latitude:'33,2603',longitude:'-7,5922'},
      {name:'Casablanca', key:'8',latitude:33.5333,longitude:-7.5833},
      {name:'Chefchaouen', key:'9',latitude:'35,1714',longitude:'-5,2697'},
      {name:'Dcheira', key:'10',latitude:'26.983',longitude:'-13.383'},
      {name:'ElJadida', key:'11',latitude:'33,2333',longitude:'-8,5'},
      {name:'Errachidia', key:'12',latitude:' 31,9319',longitude:'-4,4244'},
      {name:'Essaouira', key:'13',latitude:' 31,5131',longitude:' -9,7697'},
      {name:'Fès', key:'14',latitude:'34,0333',longitude:'-5'},
      {name:'Guelmim', key:'15',latitude:' 28,9833',longitude:'-10,0667'},
      {name:'Inezgane', key:'16',latitude:' 30,3523',longitude:'-9,5515'},
      {name:'Kénitra', key:'17',latitude:' 34,25',longitude:' -6,5833'},
      {name:'Khouribga', key:'18',latitude:' 32,8833',longitude:' -6,9'},
      {name:'Laâyoune', key:'19',latitude:'  35,1714',longitude:'-5,2697'},
      {name:'Larache', key:'20',latitude:'35,1833',longitude:' -6,15'},
      {name:'Marrakech', key:'21',latitude:' 31,6333',longitude:' -8'},
      {name:'Meknès', key:'22',latitude:' 33,895',longitude:''},
      {name:'Mohammedia', key:'23',latitude:'',longitude:' -5,5547'},
      {name:'Nador', key:'24',latitude:'35,1667',longitude:'-2,9333'},
      {name:'Oujda', key:'25',latitude:' 34,6867',longitude:'  -1,9114'},
      {name:'Rabat', key:'26',latitude:'34,015',longitude:'-6,8327'},
      {name:'Safi', key:'27',latitude:' 32,2833',longitude:'-9,2333'},
      {name:'Salé', key:'28',latitude:'34,0337',longitude:' -6,7708'},
      {name:'Séfrou', key:'29',latitude:' 33,8305',longitude:'-4,8353'},
      {name:'Settat', key:'30',latitude:' 33',longitude:'-7,6167'},
      {name:'Tanger', key:'31',latitude:' 35,7667',longitude:'-5,8'},
      {name:'TanTan', key:'32',latitude:' 28,4333',longitude:'  -11,1'},
      {name:'Taourirt', key:'33',latitude:'34.4073100',longitude:'-2.8973200'},
      {name:'Taza', key:'34',latitude:' 34,2167',longitude:'-4,0167'},
      {name:'Témara', key:'35',latitude:' 33.8881196',longitude:'-6.9394011'},
      {name:'Tetouan', key:'36',latitude:'35,5889',longitude:' -5,3626'},
      {name:'Tiznit', key:'37',latitude:' 29.6974200',longitude:'-9.7316200'},
      {name:'Youssoufia', key:'38',latitude:'  32,25',longitude:'-8,5333'},
      ],
      searchTxt:null,
      temp:[  {name:'Agadir', key:'1',latitude : 27.8778,longitude : '-15.5204'},
      {name:'AitMelloul', key:'2',latitude:30.3342,longitude: -9.4972},
      {name:'Al Hoceima', key:'3',latitude:' 35,25',longitude:' -3,9333'},
      {name:'Azemmour', key:'4',longitude:'33,2878',latitude:'-8,3422'},
      {name:'Benslimane', key:'5',latitude:'33,619',longitude:' -7,1306'},
      {name:'Berkane', key:'6',latitude:' 34,9167',longitude:'-2,3167'},
      {name:'Berrechid', key:'7',latitude:'33,2603',longitude:'-7,5922'},
      {name:'Casablanca', key:'8',latitude:33.5333,longitude:-7.5833},
      {name:'Chefchaouen', key:'9',latitude:'35,1714',longitude:'-5,2697'},
      {name:'Dcheira', key:'10',latitude:'26.983',longitude:'-13.383'},
      {name:'ElJadida', key:'11',latitude:'33,2333',longitude:'-8,5'},
      {name:'Errachidia', key:'12',latitude:' 31,9319',longitude:'-4,4244'},
      {name:'Essaouira', key:'13',latitude:' 31,5131',longitude:' -9,7697'},
      {name:'Fès', key:'14',latitude:'34,0333',longitude:'-5'},
      {name:'Guelmim', key:'15',latitude:' 28,9833',longitude:'-10,0667'},
      {name:'Inezgane', key:'16',latitude:' 30,3523',longitude:'-9,5515'},
      {name:'Kénitra', key:'17',latitude:' 34,25',longitude:' -6,5833'},
      {name:'Khouribga', key:'18',latitude:' 32,8833',longitude:' -6,9'},
      {name:'Laâyoune', key:'19',latitude:'  35,1714',longitude:'-5,2697'},
      {name:'Larache', key:'20',latitude:'35,1833',longitude:' -6,15'},
      {name:'Marrakech', key:'21',latitude:' 31,6333',longitude:' -8'},
      {name:'Meknès', key:'22',latitude:' 33,895',longitude:''},
      {name:'Mohammedia', key:'23',latitude:'',longitude:' -5,5547'},
      {name:'Nador', key:'24',latitude:'35,1667',longitude:'-2,9333'},
      {name:'Oujda', key:'25',latitude:' 34,6867',longitude:'  -1,9114'},
      {name:'Rabat', key:'26',latitude:'34,015',longitude:'-6,8327'},
      {name:'Safi', key:'27',latitude:' 32,2833',longitude:'-9,2333'},
      {name:'Salé', key:'28',latitude:'34,0337',longitude:' -6,7708'},
      {name:'Séfrou', key:'29',latitude:' 33,8305',longitude:'-4,8353'},
      {name:'Settat', key:'30',latitude:' 33',longitude:'-7,6167'},
      {name:'Tanger', key:'31',latitude:' 35,7667',longitude:'-5,8'},
      {name:'TanTan', key:'32',latitude:' 28,4333',longitude:'  -11,1'},
      {name:'Taourirt', key:'33',latitude:'34.4073100',longitude:'-2.8973200'},
      {name:'Taza', key:'34',latitude:' 34,2167',longitude:'-4,0167'},
      {name:'Témara', key:'35',latitude:' 33.8881196',longitude:'-6.9394011'},
      {name:'Tetouan', key:'36',latitude:'35,5889',longitude:' -5,3626'},
      {name:'Tiznit', key:'37',latitude:' 29.6974200',longitude:'-9.7316200'},
      {name:'Youssoufia', key:'38',latitude:'  32,25',longitude:'-8,5333'},
      ],
    }
  } 
  renderHeader=()=>{
    return <SearchBar placeholder="Rechercher une ville"  lightTheme round editable={true} value={this.state.searchTxt} onChangeText={this.UpdateSearch} />
  }
  UpdateSearch=searchTxt=>{
    this.setState({searchTxt},()=>{
      if(''==searchTxt){
        this.setState({
          city:[...this.state.temp]
        });
        return;
      }
      this.state.city=this.state.temp
      .filter(function(item){
        return item.name.includes(searchTxt)
      })
      .map(function({key,latitude,longitude,name}){
        return {key,latitude,longitude,name};
      });
    }) ;  }
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
<Text style={{  fontWeight:"bold",
     textAlign:"center",
    fontSize:18     ,
    marginVertical:18,marginLeft:"14%"}} >Pharmacie de garde</Text>

</View>


      </View>
      <View >

<FlatList
ListHeaderComponent={this.renderHeader}
  keyExtractor={(item)=>(item.key)}
  data={this.state.city}
  renderItem={({item})=>(
    <View style={{borderBottomColor:"#E0E0E0",borderBottomWidth:2}} >
<TouchableOpacity onPress={()=>this.props.navigation.navigate('MAP',item)} >

    <View  style={GlobalStyles.compte_g} >
        <View style={GlobalStyles.compte}>
            <View >
            <Image source={require('../../assets/morocco.png')}  style={{marginHorizontal:9,height:40,width:40}} />

            </View>
            <View style={{marginLeft:20}}>
            <Text style={{fontSize:22,fontWeight:'bold'}}>{item.name}</Text>
            </View>
            


        </View>

   

     <View   >
     <Image source={require('../../assets/next_g.png')} style={{alignSelf:"center",height:20,width:20}}  />

     </View>
     </View>
</TouchableOpacity>
</View>
  )}
/>

</View>
  </View>
  );
}
    
  }
  export default Garde_D;