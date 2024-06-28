import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

const Header = ({im_url,fc,styll,email}) => {
  return (
    <View>
      <View style={[{flexDirection:'row',justifyContent:'space-between'},styll]}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <Image source={im_url} style={{width:30,height:30,borderRadius:50}} />
        <Text>{email}</Text>
        </View>
       <TouchableOpacity onPress={fc}>
       <Icon name="cart" size={30} color="#F9D678" />
       </TouchableOpacity>
      
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})