import { StyleSheet, Text, View } from 'react-native'
import React from 'react'





const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: 150, 
    
  
    margin:10,
    borderRadius:12,
    alignItems:'center',
    borderColor:'orange',
    backgroundColor:'#ffffff'
   

  },
  image:{
    height:120,
    width:"90%",
    borderRadius:12,
  margin:5},
  
  boxItem:{
      width:"100%",
      alignItems:'center',
      justifyContent:'center'
    },
  chitiet:{
    
    backgroundColor:"orange",
    width:30,
    height:30,
    borderRadius:40,
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    top:165,
    right:5
    
  }
    

  
    
})
export default styles