import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import auth,{ FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import  AsyncStorage  from '@react-native-async-storage/async-storage'
const Logout = () => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=>{
        AsyncStorage.setItem('isLoggedIn', 'false');
        auth().signOut();
        navigation.navigate('Login');
       
    }} style={{alignItems:'center',borderColor:'black',borderWidth:1,borderRadius:12,flexDirection:'row',padding:20,margin:5}}>
        <Icon name='log-out' size={24} color={'black'} />
        
      <Text style={{fontSize:17,color:'black'}}>Đăng xuất</Text>
    </TouchableOpacity>
  )
}

export default Logout

const styles = StyleSheet.create({})