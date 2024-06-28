import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
const Resetpass = () => {
    const navigation = useNavigation();
    return (
      <TouchableOpacity onPress={()=>{
         
          
          navigation.navigate('Resetpass');
         
      }} style={{alignItems:'center',borderColor:'black',borderWidth:1,borderRadius:12,flexDirection:'row',padding:20,margin:5}}>
          <Icon name='refresh' size={24} color={'black'} />
          
        <Text style={{fontSize:17,color:'black'}}>Lấy lại mật khẩu</Text>
      </TouchableOpacity>
  )
}

export default Resetpass

const styles = StyleSheet.create({})