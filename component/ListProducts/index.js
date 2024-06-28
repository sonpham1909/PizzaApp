import { StyleSheet, Text, View,FlatList ,Image,TouchableOpacity, ActivityIndicator, Alert} from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons';

import { useNavigation } from '@react-navigation/native';
import { fetchProducts } from '../../src/redux/action/ActionProducts';
import { useDispatch, useSelector } from "react-redux";


const ThucDon = () => {
  const navigation = useNavigation();


 
  const [data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [CheckList, setCheck] = useState("pizza");
  const  listTodo =  useSelector(state => state.listProduct.listProducts);



  const dispatch = useDispatch();// của redux

    
  useEffect(() => {
   dispatch(fetchProducts());
   
   
   
 }, [dispatch,CheckList]);

 useEffect(() => {
  setdata(listTodo);
}, [listTodo,CheckList]);
  
    


    const renderItem = ({item})=>{
      
    if(item.loai === CheckList){
      const maxLength = 20; // Số ký tự tối đa bạn muốn hiển thị
  const text = item.title;

  let limitedText = text;
  if (text.length > maxLength) {
    limitedText = text.substring(0, maxLength) + "...";
  }


    
      return(
        <TouchableOpacity  onPress={() => {
          navigation.navigate('DetailProduct', { item }); // Pass the selected item to the DetailProduct screen
        }}>
            <View style={{flexDirection:'row',margin:10,borderWidth:1,borderColor:'orange',borderRadius:12}}>
           
           <Image source={{uri: item.image}} style={{width:100,height:100,borderRadius:12,margin:5}}/>
           

          <View style={{width:"100%",padding:10}}>
          <Text  numberOfLines={2}  style={{fontSize:15,fontWeight:'600',color:"orange"}}>{limitedText}</Text>
            <Text style={{fontSize:14,fontWeight:'500',color:"red",marginTop:10}}>{item.price}</Text>
         
          </View>
          <TouchableOpacity style={{position:'absolute',top:40,right:-1}}>
          <Icon name="cart" size={30} color="red" />

          </TouchableOpacity>
         
         
        </View>
        </TouchableOpacity>

      
      );

    }
    

    }
   
  
  return (
   <SafeAreaView>
    <Text style={{fontSize:20,fontWeight:'600',color:"orange",textAlign:'center',margin:10}} >Thực đơn</Text>

    <View style={{flexDirection:'row',gap:20,}}>
             <TouchableOpacity onPressIn={()=>setCheck('pizza')} style={{marginLeft:10,width:100,height:30,borderRadius:20,backgroundColor:'orange',alignItems:'center',justifyContent:'center'}}  onPress={() => {} }>
                <Text>Pizza</Text>
            </TouchableOpacity>



            <TouchableOpacity onPressIn={()=>setCheck('soda')} style={{width:100,height:30,borderRadius:20,backgroundColor:'orange',alignItems:'center',justifyContent:'center'}}  onPress={() => {} }>
                <Text>Đồ uống</Text>
            </TouchableOpacity>


            <TouchableOpacity  onPressIn={() => setCheck('combo')} style={{width:100,height:30,borderRadius:20,backgroundColor:'orange',alignItems:'center',justifyContent:'center'}}  onPress={() => {} }>
                <Text>Combo</Text>
            </TouchableOpacity>


            
             


           </View>
  
            <FlatList
      
        data={data}
        keyExtractor={item=>item.id}
        renderItem={renderItem}/>
      
        
        
        
   </SafeAreaView>
  )
}

export default ThucDon

const styles = StyleSheet.create({})