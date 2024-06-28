import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import auth,{ FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';


const Main = () => {
const navigation = useNavigation();
  const route = useRoute();
  const {user}  = route.params;
  const [initializing, setinitializing] = useState(true);
  const [user1, setUser] = useState<FirebaseAuthTypes.User | null>();
  const [EmailInput, setEmailInput] = useState('');

  useEffect(()=>{
    const subscriber = auth().onAuthStateChanged(userState=>{
    setUser(userState);
    if(initializing){
    setinitializing(false);
    }
    });
    
    return subscriber;
    
    },[]);


  return (
    <View>
     {
      (initializing)?null:(
         <>
         <Text>{user1.email}</Text>
         <Button title='Logout' onPress={()=>{
           auth().signOut();
           navigation.navigate('Login');
           
         }} /></>
      )
    
      
      }
    
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({});