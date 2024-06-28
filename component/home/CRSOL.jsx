import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

const CRSOL = () => {

  const images = [
        'https://images8.alphacoders.com/644/thumb-1920-644361.jpg',
        'https://images4.alphacoders.com/199/thumb-1920-199848.jpg',
        'https://www.altonivel.com.mx/wp-content/uploads/2017/12/Depositphotos_36567413_xl-2015.jpg',
      ];
  

  return (
    <View>
      
      <SliderBox images={images} dotColor="#F9D678" inactiveDotColor="black"
      dotStyle={{height:10,width:10,borderRadius: 50}} imageLoadingColor="black" 
      autoplay={true} autoplayInterval={100} 
      circleLoop={true}
      onCurrentImagePressed={(index)=>alert(index+1)}
      firstItem={4}
      paginationBoxVerticalPadding={20} />
    </View>
    // ...
  );
};

const styles = StyleSheet.create({
  // ...
});

export default CRSOL; // Đảm bảo bạn đã xuất thành phần CRSOL