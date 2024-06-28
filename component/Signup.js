import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextInputDemo from './TextInputDemmo'

const Signup = ({navigation}) => {
  return (

    <View style={{flex:1,backgroundColor:"#ffffff",justifyContent:'center'}}>
      <View style={{alignItems:'center'}}>
      <Image source={require('./images/logopz.png')} style={{width:150,height:150}} />
      </View>
      <Text style={{marginTop:20,fontSize:22,fontWeight:'600',textAlign:'center'}}>Đăng ký</Text>
      
      <TextInputDemo  placeholder='Nhập email' 
      
      style={[{borderRadius:10,margin:20,fontSize:15}]} 
    />
        <TextInputDemo  placeholder='Nhập mật khẩu' 
      style={[{borderRadius:10,margin:20,fontSize:15}]} 
    />
       <TextInputDemo  placeholder='Nhập lại mật khẩu' 
      style={[{borderRadius:10,margin:20,fontSize:15}]} 
    />
    <View style={{padding:20}}><Button title='Đăng ký'  color={'#F9D678'} /></View>
    
      <Text style={{fontSize:16,fontWeight:'500',textAlign:'center'}} onPress={()=>navigation.navigate('Login')}>Quay trở lại đăng nhập</Text>
     
    
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({})