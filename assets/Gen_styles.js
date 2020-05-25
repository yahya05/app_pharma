import {StyleSheet} from 'react-native';
const GlobalStyles=StyleSheet.create({

    container: {
        flex: 1,
        fontFamily: "sans-serif"    ,
        backgroundColor: '#E9E9E9',
        fontWeight:"900",
      
      },
      input:{
          padding:10,
          paddingLeft:27,
          borderRadius:10,
          borderColor:"#ddd",
          borderWidth:1,
          height:25,
          marginLeft:5,
          marginRight:5,
          backgroundColor:"white",
          borderBottomColor:'#ddd'
          
      },
      input_view:{
    marginTop:27,
    position:"relative",
    marginBottom:30,

      },
      panel_cnx:{
        borderRadius:10,
        backgroundColor:'white',
        paddingVertical:5,
        marginHorizontal:8,
        marginTop:"3%",
        marginHorizontal:9,
        borderColor:'#E9E9E9',
        borderWidth:1,
        height:"40%"
       
       },
header:{
    marginTop:10,
    alignItems:'center',
flexDirection:'row',
justifyContent:"center"


},
header_B:{
    marginTop:10,
flexDirection:'row',
alignItems:'center',

justifyContent:"flex-start"

},
title_Back:{

   marginLeft:"15%"


},

title:{
    fontWeight:"bold",
     textAlign:"center",
    fontSize:18     ,
    marginBottom:18,
    marginTop:18

    

},

icon:{
    position:"absolute",
    marginTop:8,
    marginLeft:10,
},
back:{
      width:25,
      height:25,
     
},
article:{
    marginHorizontal:10,
    borderRadius:10,
    borderColor:"#ddd",
    borderWidth:1,
 backgroundColor:"white",
 height:300,
 
 

},
sujet:{
    paddingVertical:3,
    paddingLeft:15,
    paddingRight:15,
    borderRadius:9,
    borderColor:"#ddd",
    borderWidth:1,
    marginLeft:5,
    marginRight:5,
    backgroundColor:"#C0FFC0",
    color:'#008A00',
    paddingLeft:5,
width:"50%",
marginVertical:10,
textAlign:"center"

},
titre_article:{
    fontWeight:"bold",
    textAlign:"auto"

    
},
titre_article_view:{
    marginHorizontal:6,
    marginVertical:10,
    width:"80%"

},
text1:{
    color:'grey',
    fontSize:16,
  marginVertical:"4%",
  marginHorizontal:"3%"
  },
  view1:{
    marginLeft:9
  },
  text2:{
fontSize:13,
textAlign:"center",

  },
  conn:{
    color:'#C1C1C1',
    fontSize:15,
    textAlign:'center',
    paddingBottom:3
    
  },
  buttonb:{
   
    borderRadius:30,
    paddingVertical:"3.5%",
    paddingHorizontal:"25%",
    backgroundColor:"#008A00",
    marginVertical:"2%",

},
buttonText:{
    color:'white',
    fontWeight:'bold',
    textTransform:'uppercase',
    fontSize:16,
    textAlign:'center',
    
    
},
panel:{
  alignItems:'center',
 borderRadius:10,
 alignSelf:"center",
 backgroundColor:'white',
 paddingVertical:5,
 padding:30,
 marginTop:"3%",
 borderColor:'#E9E9E9',
 borderWidth:1
 

},
sugges:{
  paddingBottom:"13%",
  paddingTop:"3%"
},
compte:{
 
  flexDirection:'row',
  alignItems:"center",
paddingVertical:"4%",

},
compte_g:{
 
  flexDirection:'row',
  justifyContent:"space-between",
  alignItems:"center",
backgroundColor:"white",

},
buttonb_C:{
   
  borderRadius:30,
  paddingVertical:"3.5%",
  paddingHorizontal:"25%",
  backgroundColor:"#008A00",
  margin:"2%",

},
});
export default  GlobalStyles;