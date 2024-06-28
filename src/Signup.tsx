import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import auth,{ FirebaseAuthTypes } from '@react-native-firebase/auth';


const Signup = () => {
    const [initializing, setinitializing] = useState(true);
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>();
const [EmailInput, setEmailInput] = useState('');
const [PassInput, setPassInput] = useState('');


useEffect(()=>{
  const subscriber = auth().onAuthStateChanged(userState=>{
setUser(userState);
if(initializing){
  setinitializing(false);
}
  });

  return subscriber;

},[]);


const singupWithEmailPass = ()=>{
  auth()
  .createUserWithEmailAndPassword(EmailInput,PassInput)
  .then(()=>{
    Alert.alert('Tài khoản đã được tạo và đăng nhập');
  })
  .catch((error) =>{
    if(error.code === 'auth/email-already-in-use'){
      Alert.alert('Email đã tồn tại');

    }

    if(error.code === 'auth/invalid-email'){
      Alert.alert('Email của bạn không hợp lệ');

    }

    console.log(error);
    





  }
)
}

  return (
    <View>
    <Text style={{fontSize:25,fontWeight:'bold',color:'#000',textAlign:'center',margin:10}}>Đăng ký</Text>
    <TextInput placeholder='Nhập email' style={{margin:10}} onChangeText={(txt)=>setEmailInput(txt)}/>
    <TextInput placeholder='Nhập password' style={{margin:10}} onChangeText={(txt)=>setPassInput(txt)} />

    <View style={{margin:10}}>
    
    <Button title="Đăng Ký" color="#FCAFCF" onPress={singupWithEmailPass} />
    </View>
  </View>
  )
}

export default Signup

const styles = StyleSheet.create({})