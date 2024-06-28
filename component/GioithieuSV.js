import { StyleSheet, Text, TouchableOpacity, View,SafeAreaView, Image } from 'react-native'
import React from 'react'


const GioithieuSV = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1,alignItems:'center'}}>
     
      <Image source={require('./images/chatting.png')} style={{width:200,height:250,marginTop:20}} />
      <Text style={{fontSize:25,fontWeight:"bold",textAlign:'center',margin:20,color:"red"}}>Bài ASM</Text>
      <Text style={{fontSize:19,fontWeight:"bold",margin:10}}>Họ và Tên: PHẠM VĂN SƠN</Text>
      <Text style={{fontSize:19,fontWeight:"bold",}}>Lớp MD18306</Text>
      <Text style={{fontSize:19,fontWeight:"bold",margin:10,color:'red'}}>Chủ đề: PIZZA APP</Text>

       <View style={styles.vBTN}>
     <TouchableOpacity onPress={()=>{navigation.navigate('GTAPP')}} style={styles.btnTieptuc}>
        <Text style={styles.textBtn}>Tiếp tục</Text>
      </TouchableOpacity>
     </View>
    </SafeAreaView>
  )
}

export default GioithieuSV

const styles = StyleSheet.create({
    btnTieptuc:{
        width:"90%",
        backgroundColor:"#F9D678",
        height:45,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20
        

    },
    vBTN:{
        position: 'absolute',
        top: 550,
        left: 0,
        right: 0,
        alignItems: 'center',

    },
    textBtn:{
        fontWeight:"600",
        fontSize:18
    }
})