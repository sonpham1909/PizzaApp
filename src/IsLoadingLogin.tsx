import React, { useEffect } from 'react';
import  AsyncStorage  from '@react-native-async-storage/async-storage'
import { View,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const AuthLoadingScreen = () => {
    const navigation = useNavigation();
  useEffect(() => {
    // Kiểm tra trạng thái đăng nhập
    AsyncStorage.getItem('isLoggedIn')
      .then((isLoggedIn) => {
        if (isLoggedIn === 'true') {
            navigation.navigate('Bottomtab');
          // Người dùng đã đăng nhập, chuyển đến màn hình chính
          // navigation.navigate('Main');
        } else {
            navigation.navigate('Login');
          // Người dùng chưa đăng nhập, chuyển đến màn hình đăng nhập
          // navigation.navigate('Login');
        }
      })
      .catch((error) => {
        // Xử lý lỗi
        console.log('Error:', error);
      });
  }, []);

  return (
    <View style={{alignItems:'center',justifyContent:'center',flex:1,backgroundColor:'#ffffff'}}>
        <Image source={require('../component/images/logopz.png')} style={{width:50,height:50}} />

    </View>
    // Giao diện loading
    // ...
  );
};

export default AuthLoadingScreen;