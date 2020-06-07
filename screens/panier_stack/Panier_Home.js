import React,{useState} from 'react';
import { StyleSheet, Text, View,Button ,TouchableOpacity,Image,ScrollView,Modal,TouchableWithoutFeedback,Keyboard} from 'react-native';
import GlobalStyles from '../../assets/Gen_styles';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import {Linking} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
class Panier_Home extends React.Component{
    constructor(){
        super()
        this.state={
          nom:'marwan',
        ordo:'full',type:'pharma',com:''}}
  render(){


    
    return (
      <View style={GlobalStyles.container}>
         <View style={GlobalStyles.header} >
           <Text style={{fontWeight:"bold",
     textAlign:"center",
    fontSize:18     ,
    marginBottom:20,
    marginTop:18}}>Mon panier</Text>

        </View>
        {this.state.nom ?  this.state.type=='pharma' ?  this.state.com ? 
        <View>
        <View style={styles.view1}>
        <Text style={styles.text1} >MES COMMANDES </Text>
      </View>
      <View style={{marginHorizontal:"3%"}} >
          <TouchableOpacity  onPress={()=>this.props.navigation.navigate("Ordon_phar")}  >
              <View  style={{
flexDirection:'row',
justifyContent:"space-between",
alignItems:"center",
backgroundColor:"white",
borderRadius:10
}} >
                  <View style={GlobalStyles.compte}>
                     
                      <View style={{marginLeft:10}}>
                      <Text >ORDONNANCE ID</Text>
                      <Text style={{color:"#808080"}}>ID</Text>

                        <Text style={{color:"#808080"}}>ETAT:TRANSMISE</Text>
                      </View>
                      


                  </View>
        
             

               
               </View>
          </TouchableOpacity>
      </View>
      </View> : 

<View>
<Image source={require('../../assets/form_.png')}  style={{alignSelf:"center",marginTop:30,marginTop:30,height:250,width:250}} />



<View>

<View style={{  alignItems:'center', alignSelf:"center",paddingVertical:5, padding:30, marginTop:"3%"}} >
<View  style={GlobalStyles.sugges}>
<Text style={{  color:'grey',    fontSize:17,    textAlign:'center',paddingBottom:3}}> Toutes les demandes et réservations des clients seront accessible ici. </Text>


</View>

<TouchableOpacity    onPress={()=>this.props.navigation.navigate('Compte_Home')}>
<View style={{ borderRadius:30,
paddingVertical:"3.7%",
paddingHorizontal:"13%",
backgroundColor:"#008A00",
marginVertical:"2%",}}>
 <Text style={GlobalStyles.buttonText}>VOTRE COMPTE</Text>
 
</View>

</TouchableOpacity>


</View>
</View>



</View>

        : this.state.ordo ?    <View>




            <View style={styles.view1}>
          <Text style={styles.text1} >MES DEMANDES </Text>
        </View>
        <View style={{marginHorizontal:"3%"}} >
            <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Ordon_contenu')}  >
                <View  style={{
  flexDirection:'row',
  justifyContent:"space-between",
  alignItems:"center",
backgroundColor:"white",
borderRadius:10
}} >
                    <View style={GlobalStyles.compte}>
                       
                        <View style={{marginLeft:10}}>
                        <Text >ORDONNANCE ID</Text>
                        <Text style={{color:"#808080"}}>ID</Text>

                          <Text style={{color:"#808080"}}>ETAT:TRANSMISE</Text>
                        </View>
                        


                    </View>
          
               

                 
                 </View>
            </TouchableOpacity>
        </View>
        </View> :
        <View>
        <Image source={require('../../assets/form_.png')}  style={{alignSelf:"center",marginTop:30,marginTop:30,height:250,width:250}} />



        <View>
     
     <View style={{  alignItems:'center', alignSelf:"center",paddingVertical:5, padding:30, marginTop:"3%"}} >
       <View  style={GlobalStyles.sugges}>
       <Text style={{  color:'grey',    fontSize:17,    textAlign:'center',paddingBottom:3}}> Toutes vos demandes de réservation seront </Text>
     <Text style={{  color:'grey',    fontSize:17,    textAlign:'center',paddingBottom:3}}>  accessible ici. </Text> 


       </View>

     <TouchableOpacity    onPress={()=>this.props.navigation.navigate('Ordon')}>
     <View style={{ borderRadius:30,
    paddingVertical:"3.7%",
    paddingHorizontal:"13%",
    backgroundColor:"#008A00",
    marginVertical:"2%",}}>
         <Text style={GlobalStyles.buttonText}>ENVOYER UNE ORDONNANCE</Text>
         
     </View>
     
 </TouchableOpacity>


   </View>
   </View>



        </View>


     
      :  <View>
        <Image source={require('../../assets/panier_h.png')}  style={{alignSelf:"center",marginTop:30,marginTop:30,height:275,width:250}} />
     
     <View>
     
             <View style={{  alignItems:'center', alignSelf:"center",paddingVertical:5, padding:30, marginTop:"3%"}} >
               <View  style={GlobalStyles.sugges}>
               <Text style={{  color:'grey',    fontSize:17,    textAlign:'center',paddingBottom:3}}> Pour accéder à votre panier, la réservation de</Text>
             <Text style={{  color:'grey',    fontSize:17,    textAlign:'center',paddingBottom:3}}>  de produit et l'envoi d'ordonance, </Text> 
     
             <Text style={{  color:'grey',    fontSize:17,    textAlign:'center',paddingBottom:3}}>veuilez-vous connecter</Text>
     
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
           </View>
        </View>   }
  
 

     
   
      </View>
    );}
  }

  export default Panier_Home;


  const styles= StyleSheet.create({
    text1:{
      color:'grey',
      fontSize:16,
      paddingLeft:3
    },
    view1:{
      marginTop:15,
      marginLeft:9,
      marginBottom:8,


    },
    text2:{
fontSize:13,
textAlign:"center",

    }

  })
  
     
   







  