import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextInputDemo from './TextInputDemmo'

const Login = ({navigation}) => {
  return (

    <View style={{flex:1,backgroundColor:"#ffffff",justifyContent:'center'}}>
      <View style={{alignItems:'center'}}>
      <Image source={require('./images/logopz.png')} style={{width:150,height:150}} />
      </View>
      <Text style={{marginTop:20,fontSize:22,fontWeight:'600',textAlign:'center'}}>Đăng nhập</Text>
      
      <TextInputDemo  placeholder='Nhập email' 
      
      style={[{borderRadius:10,margin:20,fontSize:15}]} 
    />
        <TextInputDemo  placeholder='Nhập mật khẩu' 
      style={[{borderRadius:10,margin:20,fontSize:15}]} 
    />
    <View style={{padding:20}}><Button title='Đăng nhập'  onPress={()=>navigation.navigate('Bottomtab')}  color={'#F9D678'} /></View>
    <View style={{flexDirection:'row',justifyContent:'space-between',padding:20}}>
      <Text style={{fontSize:13}}>Quên mật khẩu ?</Text>
      <Text style={{fontSize:13}} onPress={()=>navigation.navigate('Signup')}>Chưa có tài khoản? Đăng ký</Text>
    </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})