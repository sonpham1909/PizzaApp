import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyDevice from '../Block/MyDevice'
import MyInfor from '../Block/MyInfor'
import Logout from '../Block/Logout'
import Resetpass from '../Block/Resetpass'


const SettingTAB = () => {
  return (
    <View>
      <Text style={{fontSize:20,fontWeight:'600',color:"orange",textAlign:'center',margin:10}}>Setting</Text>
     <MyInfor/>
     <MyDevice/>
     <Logout/>
     <Resetpass/>
    </View>
  )
}

export default SettingTAB

const styles = StyleSheet.create({})