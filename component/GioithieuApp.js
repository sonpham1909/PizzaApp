import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'

const GioithieuApp = ({navigation}) => {
  return (
    <View style={{flex:1,alignItems:'center'}}>
        <View style={{width:"100%"}}>
        <Text style={{fontSize:29,fontWeight:"bold",margin:20,color:"#000"}}>Chào mừng đến với:</Text>
        </View>
     <Text style={{fontSize:27,fontWeight:"bold",textAlign:'center',color:"orange"}}>PIZZA APP</Text>
      <Image source={require('./images/pizza.png')} style={{width:250,height:250,marginTop:20}} />
      <View style={{width:"100%",padding:20}}>
        <Text style={{fontWeight:300}}>Ứng dụng đặt pizza tiện lợi, giúp bạn đặt pizza dễ dàng hơn 
            với giao diện dễ sử dụng. Thanh toán nhanh hơn với nhiều lựa chọn! ⭐⭐⭐⭐⭐
        </Text>
        </View>
      
     <View style={styles.vBTN}>
     <TouchableOpacity onPress={()=>{navigation.navigate('Login')}} style={styles.btnTieptuc}>
        <Text style={styles.textBtn}>Bắt đầu</Text>
      </TouchableOpacity>
     </View>
    </View>

  )
}

export default GioithieuApp

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