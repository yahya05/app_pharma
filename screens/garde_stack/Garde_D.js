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
  
      city: [  {name:'Agadir', key:'1',latitude : 30.4211144,longitude : -9.5830626},
        {name:'AitMelloul', key:'2',latitude:30.338128,longitude: -9.504277},
        {name:'Al Hoceima', key:'3',latitude: 35.245114,longitude:-3.930186},
        {name:'Azemmour', key:'4',longitude:33.2863928,latitude:-8.3491008},
        {name:'Benslimane', key:'5',latitude:33.6168709,longitude:-7.123036},
        {name:'Berkane', key:'6',latitude:34.9266755,longitude:-2.3294087},
        {name:'Berrechid', key:'7',latitude:33.2676746,longitude:-7.5811465},
        {name:'Casablanca', key:'8',latitude:33.5950627,longitude:-7.6187768},
        {name:'Chefchaouen', key:'9',latitude:35.1700832,longitude:-5.2766583},
        {name:'Dcheira', key:'10',latitude:30.375281,longitude:-9.528495},
        {name:'ElJadida', key:'11',latitude:33.2336952,longitude:-8.5004248},
        {name:'Errachidia', key:'12',latitude:31.929089,longitude:-4.4340807},
        {name:'Essaouira', key:'13',latitude:31.5118281,longitude:-9.7620903},
        {name:'Fès', key:'14',latitude:34.0346534,longitude:-5.0161926},
        {name:'Guelmim', key:'15',latitude:28.9863852,longitude:-10.0574351},
        {name:'Inezgane', key:'16',latitude:30.3562929,longitude:-9.5459347},
        {name:'Kénitra', key:'17',latitude:34.26457,longitude:-6.570169},
        {name:'Khouribga', key:'18',latitude:32,longitude:-6},
        {name:'Laâyoune', key:'19',latitude:27.154512,longitude:-13.1953921},
        {name:'Larache', key:'20',latitude:35.1952327,longitude:-6.152913},
        {name:'Marrakech', key:'21',latitude:31.6258257,longitude:-7.9891608},
        {name:'Meknès', key:'22',latitude:33.8978116,longitude:-5.5319836},
        {name:'Mohammedia', key:'23',latitude:33.6958383,longitude:-7.3893292},
        {name:'Nador', key:'24',latitude:35.0519185,longitude:-2.8243994},
        {name:'Oujda', key:'25',latitude:34.677874,longitude:-1.929306},
        {name:'Rabat', key:'26',latitude:34.022405,longitude:-6.834543},
        {name:'Safi', key:'27',latitude:32.2494145,longitude:-8.9941654},
        {name:'Salé', key:'28',latitude:34.044889,longitude:-6.814017},
        {name:'Séfrou', key:'29',latitude:33.824898,longitude:-4.833336},
        {name:'Settat', key:'30',latitude:33.002397,longitude:-7.619867},
        {name:'Tanger', key:'31',latitude:35.7642313,longitude:-5.818626},
        {name:'TanTan', key:'32',latitude:28.437553,longitude:-11.098664},
        {name:'Taourirt', key:'33',latitude:34.4052822,longitude:-2.8952455},
        {name:'Taza', key:'34',latitude:34.230155,longitude:-4.010104},
        {name:'Témara', key:'35',latitude:33.917166,longitude:-6.923804},
        {name:'Tetouan', key:'36',latitude:35.570175,longitude:-5.3742776},
        {name:'Tiznit', key:'37',latitude:29.698624,longitude:-9.7312815},
        {name:'Youssoufia', key:'38',latitude:32.245801,longitude:-8.532439},
        ],
        searchTxt:null,
        temp:[  {name:'Agadir', key:'1',latitude : 30.4211144,longitude : -9.5830626},
        {name:'AitMelloul', key:'2',latitude:30.338128,longitude: -9.504277},
        {name:'Al Hoceima', key:'3',latitude: 35.245114,longitude:-3.930186},
        {name:'Azemmour', key:'4',longitude:33.2863928,latitude:-8.3491008},
        {name:'Benslimane', key:'5',latitude:33.6168709,longitude:-7.123036},
        {name:'Berkane', key:'6',latitude:34.9266755,longitude:-2.3294087},
        {name:'Berrechid', key:'7',latitude:33.2676746,longitude:-7.5811465},
        {name:'Casablanca', key:'8',latitude:33.5950627,longitude:-7.6187768},
        {name:'Chefchaouen', key:'9',latitude:35.1700832,longitude:-5.2766583},
        {name:'Dcheira', key:'10',latitude:30.375281,longitude:-9.528495},
        {name:'ElJadida', key:'11',latitude:33.2336952,longitude:-8.5004248},
        {name:'Errachidia', key:'12',latitude:31.929089,longitude:-4.4340807},
        {name:'Essaouira', key:'13',latitude:31.5118281,longitude:-9.7620903},
        {name:'Fès', key:'14',latitude:34.0346534,longitude:-5.0161926},
        {name:'Guelmim', key:'15',latitude:28.9863852,longitude:-10.0574351},
        {name:'Inezgane', key:'16',latitude:30.3562929,longitude:-9.5459347},
        {name:'Kénitra', key:'17',latitude:34.26457,longitude:-6.570169},
        {name:'Khouribga', key:'18',latitude:32,longitude:-6},
        {name:'Laâyoune', key:'19',latitude:27.154512,longitude:-13.1953921},
        {name:'Larache', key:'20',latitude:35.1952327,longitude:-6.152913},
        {name:'Marrakech', key:'21',latitude:31.6258257,longitude:-7.9891608},
        {name:'Meknès', key:'22',latitude:33.8978116,longitude:-5.5319836},
        {name:'Mohammedia', key:'23',latitude:33.6958383,longitude:-7.3893292},
        {name:'Nador', key:'24',latitude:35.0519185,longitude:-2.8243994},
        {name:'Oujda', key:'25',latitude:34.677874,longitude:-1.929306},
        {name:'Rabat', key:'26',latitude:34.022405,longitude:-6.834543},
        {name:'Safi', key:'27',latitude:32.2494145,longitude:-8.9941654},
        {name:'Salé', key:'28',latitude:34.044889,longitude:-6.814017},
        {name:'Séfrou', key:'29',latitude:33.824898,longitude:-4.833336},
        {name:'Settat', key:'30',latitude:33.002397,longitude:-7.619867},
        {name:'Tanger', key:'31',latitude:35.7642313,longitude:-5.818626},
        {name:'TanTan', key:'32',latitude:28.437553,longitude:-11.098664},
        {name:'Taourirt', key:'33',latitude:34.4052822,longitude:-2.8952455},
        {name:'Taza', key:'34',latitude:34.230155,longitude:-4.010104},
        {name:'Témara', key:'35',latitude:33.917166,longitude:-6.923804},
        {name:'Tetouan', key:'36',latitude:35.570175,longitude:-5.3742776},
        {name:'Tiznit', key:'37',latitude:29.698624,longitude:-9.7312815},
        {name:'Youssoufia', key:'38',latitude:32.245801,longitude:-8.532439},
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