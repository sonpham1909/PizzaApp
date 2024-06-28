import { View, Text, Image, TouchableOpacity,Animated, ScrollView,TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const DetailProduct = ({item,quayLai}) => {
 
  
  const [scrollY] = useState(new Animated.Value(0));
  const headerHeight = scrollY.interpolate({
    inputRange: [0, 200], // Khoảng scrollY bạn muốn thu lại header
    outputRange: [200, 100], // Chiều cao header ban đầu và sau khi thu lại
    extrapolate: 'clamp', // Giới hạn giá trị outputRange trong khoảng inputRange
  });

  return (
    <View style={{justifyContent:'center',flex:1,padding:10 }}>
      
        <Image source={{ uri: item.image }} style={{ flex: 4 }} resizeMode='cover' />
        <View style={{ position: 'absolute', top: 10, left: 10, flexDirection: 'row',justifyContent:'space-between',width:"90%",margin:5 }}>
          <TouchableOpacity onPress={()=>quayLai} style={{ width: 40, height: 40, borderRadius: 40, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center', opacity: 0.5 }}>
            <Icon name='arrow-back' size={30} color='#fff' />
          </TouchableOpacity>
          <TouchableOpacity style={{ width: 40, height: 40, borderRadius: 40, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center', opacity: 0.5, marginLeft: 10 }}>
            <Icon name='heart-outline' size={30} color='#fff' />
          </TouchableOpacity>
        </View>
  
     <View style={{flex:6}}>
     <ScrollView 
     style={{}}
     
         >
      
       <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:20}}>
       <Text style={{fontSize:25,fontWeight:'700',color:'orange',padding:5,}}>{item.title}</Text>
       <View style={{flexDirection:'row',alignItems:'center'}}>
       <TouchableOpacity style={{borderRadius:20,borderColor:'orange',borderWidth:1}}  >
            <Icon name='add' size={30} color='orange' />
          </TouchableOpacity>
          <Text style={{margin:5}} >1</Text>
          <TouchableOpacity style={{borderRadius:20,borderColor:'orange',borderWidth:1}} >
           <Icon name='remove' size={30} color='orange' />
          </TouchableOpacity>
       </View>
       </View>
       <View style={{backgroundColor:"orange",borderRadius:20}}>
       <View style={{backgroundColor:'#FACACA',width:'100%',borderTopLeftRadius:20,borderTopRightRadius:20,padding:10}}>
       <Text style={{fontSize:20,fontWeight:'700',color:'#000',padding:5}}>Chi tiết</Text>
       </View>
       <Text style={{fontSize:14,color:'#000',padding:5,textAlign: 'justify', textAlignVertical: 'center',margin:15 }}>{item.deception}</Text>
       </View>
       <View style={{}}> 

       <TouchableOpacity style={{height:50,backgroundColor:'orange',alignItems:'center',justifyContent:'center',borderRadius:20,margin:10,alignSelf:'center',padding:10}}> 
        <Text style={{fontSize:18,fontWeight:'bold',color:'#fff'}}>{item.price} $ / ADD TO CART</Text>
       </TouchableOpacity>
      <View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'center',marginTop:20}}>
      <TextInput
        multiline
        placeholder="Nhập bình luận của bạn..."
        maxLength={200}
       
       
        style={{ height: 50, paddingHorizontal: 10, borderColor: 'gray', borderWidth: 1,borderRadius:20,width:'80%' }}
      />
      <Icon name='send' size={30} color='orange' />
      </View>
       </View>
      
      
       
      
      </ScrollView>
     
     </View>
    </View>
  )
}

export default DetailProduct;