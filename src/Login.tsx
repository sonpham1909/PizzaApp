import { Alert, Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import auth,{ FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import  AsyncStorage  from '@react-native-async-storage/async-storage'



const Login = () => {
  const navigation = useNavigation();
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


const signInWithEmailPass = () => {
  auth()
    .signInWithEmailAndPassword(EmailInput, PassInput)
    .then(() => {
      Alert.alert('Đăng nhập thành công');
      AsyncStorage.setItem('isLoggedIn', 'true');
      navigation.navigate('Bottomtab',{user:user});

      // Thực hiện các hành động khác sau khi đăng nhập thành công
    })
    .catch((error) => {
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        Alert.alert('Email hoặc mật khẩu không chính xác');
      }

      console.log(error);
    });
};

  return (
    <View style={{backgroundColor:'#ffffff'}}>
      <Text style={{fontSize:25,fontWeight:'bold',color:'#000',textAlign:'center',margin:10}}>Đăng nhập</Text>

      <Image source={require('../component/images/logopz.png')} style={{width:100,height:100,alignSelf:'center'}}  />
      <TextInput placeholder='Nhập email' style={{margin:10,borderColor:'orange',borderWidth:1,borderRadius:12}} onChangeText={(txt)=>setEmailInput(txt)}/>
    <TextInput placeholder='Nhập password' style={{margin:10,borderColor:'orange',borderWidth:1,borderRadius:12}} onChangeText={(txt)=>setPassInput(txt)} />

      <View style={{margin:10}}>
      <Button title='Đăng Nhập' onPress={signInWithEmailPass}  />
      </View>
      <View style={{margin:10}}>
      <Button title='Đăng Ký' color={'#FCAFCF'}  
      onPress={()=>navigation.navigate('Signup')}/>
      </View>
      <View style={{margin:10}}>
      <Button title='Quên mật khẩu' color={'#FCAFCF'}  
      onPress={()=>navigation.navigate('Resetpass')}/>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})