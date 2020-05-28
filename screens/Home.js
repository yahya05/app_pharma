import React,{useState} from 'react';
import { StyleSheet, Text, View,Button ,TouchableOpacity,Image,ScrollView,Modal,TouchableWithoutFeedback,Keyboard} from 'react-native';
import GlobalStyles from '../assets/Gen_styles';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
class Home extends React.Component{
  constructor(){
    super()
    this.state={
      nom:'',
     
      people: [{ name: 'CORONA', date: '14/10/1998', titre: "Faire ses courses au temps du Covid-19", key: '1' },
      { name: 'CORONA', date: '14/10/1998', titre: "Faire ses courses au temps du Covid-19", key: '2' },
      { name: 'CORONA', date: '14/10/1998', titre: "Faire ses courses au temps du Covid-19", key: '3' }
      ],
    }
  }
  render(){
    state = {
         
      people: [{ name: 'CORONA', date: '14/10/1998', titre: "Faire ses courses au temps du Covid-19", key: '1' },
      { name: 'CORONA', date: '14/10/1998', titre: "Faire ses courses au temps du Covid-19", key: '2' },
      { name: 'CORONA', date: '14/10/1998', titre: "Faire ses courses au temps du Covid-19", key: '3' }
      ],
  nom:null
}
    
    return (
      <View style={GlobalStyles.container}>
         <View style={GlobalStyles.header} >
          <Image source={require('../assets/logo.png')}  style={{marginBottom:5}} />
<Text style={{color:"#008A00",fontWeight:"bold",fontSize:18}}> LePharmacien</Text>
        </View>
      <ScrollView>
      {this.state.nom ?      <View style={GlobalStyles.panel_cnx} >

<View style={{ flexDirection:'row', alignItems:"center",}} >
    <Image style={{height : 100,width : 100 ,borderRadius:360,paddingRight:"4%"}} source={require('../assets/bg.png')} />
    <Text style={{fontSize:25,padding:"4%"}}>Pharmacie Dialo</Text>
    </View>

    <View  style={{ marginLeft:"3%", flexDirection:'column',alignItems:"flex-start",justifyContent:"flex-start"}} >
        <Text style={{color:"red",paddingTop:"4%",fontSize:16}}>Actuellement : Ouverte </Text>
        <Text  style={{fontSize:25}}>+212522627372 </Text>
</View>

<View style={{marginTop:"10%",marginBottom:"2%"}}>
  
    <TouchableOpacity  onPress={() => this.props.navigation.navigate('Garde')} >
    <Text style={{color:"#008A00",alignSelf:"center",fontSize:17,fontWeight:"bold",paddingBottom:0}}>TROUVER UNE PHARMACIE</Text>
    <Text style={{color:"#008A00",alignSelf:"center",fontSize:17,fontWeight:"bold",paddingTop:0}}>OUVERTE OU DE GARDE</Text>

    </TouchableOpacity>
</View>

</View>:
<View>

        <View style={GlobalStyles.panel} >
          <View  style={GlobalStyles.sugges}>
          <Text style={GlobalStyles.conn}> Pour bénéficier de la totalité des</Text>
        <Text style={GlobalStyles.conn}>  fonctionnalités de votre pharmacien,</Text> 

        <Text style={GlobalStyles.conn}> Veuillez-vous connecter</Text>

          </View>
  
        <TouchableOpacity    onPress={()=>this.props.navigation.navigate('Connect')}>
        <View style={GlobalStyles.buttonb}>
            <Text style={GlobalStyles.buttonText}>Se Connecter</Text>
            
        </View>
        
    </TouchableOpacity>
    <TouchableOpacity  onPress={()=>this.props.navigation.navigate('pasdecompte')}>
    <Text style={{color:"#008A00",fontSize:16,fontWeight:'bold',marginTop:10,marginBottom:20,}}>VOUS N'AVEZ PAS DE COMPTE?</Text>

    </TouchableOpacity>

      </View>
      </View>}

      <View>

        <View style={GlobalStyles.view1}>
          <Text style={GlobalStyles.text1} >Articles </Text>
        </View>


        <View  style={{marginBottom:20}} >
          <FlatList
          horizontal={true}
          data={state.people}
          showsHorizontalScrollIndicator={false}

          renderItem={({item})=>(
            <View >  
            <TouchableOpacity    style={GlobalStyles.article}
           onPress={()=>this.props.navigation.navigate('Detail')}>
    
            <Image source={require('../assets/test_legume.jpg')} style={{height:150,width:280,  borderTopLeftRadius:10, borderTopRightRadius:10}}   />
<View  >
<Text style={GlobalStyles.sujet} >{item.name}</Text>

</View>
<View  style={GlobalStyles.titre_article_view}  >
<Text style={GlobalStyles.titre_article} >{item.titre}</Text>

</View>
<View   >
<Text style={{margin:10,color:'grey'}}  >{item.date}</Text>

</View>


            </TouchableOpacity>
            </View> 
          )}
          />
        </View>
      </View>
      </ScrollView>
      </View>
    );}
  }

  export default Home;



  
     
   







  