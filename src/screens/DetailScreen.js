import { View, Text, Image, TouchableOpacity,Animated, ScrollView,TextInput, Alert } from 'react-native'

import store from '../redux/store/Store'
import { useNavigation } from '@react-navigation/native';


import {Provider,useDispatch,useSelector} from 'react-redux'
import DetailProduct from '../../component/DetailProduct'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { toggleproApi,fetchProducts } from '../redux/action/ActionProducts';
import { addProductApi, fetchCart,toggleTodoApi } from '../redux/action/ActionCart';


const Detail= ({item,props1}) =>{

  const listTodo = useSelector((state) => state.listProduct.listProducts);
  const listCart = useSelector((state) => state.listCart.listCart);

  const [Item, setItem] = useState(item);
  useEffect(()=>{
listTodo
  },[handleToggleFavorites,listTodo]);
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCart());
    console.log(listCart);
    
  }, [dispatch,handleToggleFavorites]);

  const handleToggleFavorites = (id, status) => {
    // Tạo đối tượng dữ liệu để cập nhật
    const updatedData = { ...item, fv: status?false : true };
    setItem(updatedData);
  
    // Dispatch action để cập nhật trạng thái yêu thích
    dispatch(toggleproApi({ id: id, data: updatedData }))
      .then((result) => {
        console.log('Todo update status successfully!');
        dispatch(fetchProducts());
      })
      .catch((error) => {
        console.error('Error update todo:', error);
      });
  };
  const handleAddTodo = () => {
    console.log('abv');
    // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
    const existingProduct = listCart.find((product) => product.id === Item.id);
    
  
    if (existingProduct) {
      // // Nếu sản phẩm đã tồn tại, tăng số lượng lên 1
      // const updatedProduct = { ...existingProduct, quanlity: existingProduct.quanlity + 1 };
      // dispatch(toggleTodoApi(updatedProduct))
      //   .then(() => {
      //     Alert.alert('Sản phẩm đã tồn tại trong giỏ hàng. Số lượng đã được tăng lên 1.');
      //     console.log('Product quantity updated successfully!');
      //   })
      //   .catch((error) => {
      //     console.error('Error updating product quantity:', error);
      //   });
      dispatch(toggleTodoApi({ id: Item.id, data: {...Item ,quanlity: existingProduct.quanlity+1 } }))
      .then((result) => {
        Alert.alert('Thành công')
        console.log('Cập nhật số lượng thành công!');
        // Cập nhật trạng thái local với giá trị số lượng mới
        const updatedCart = data.map((item) => {
          if (item.id === id) {
            return { ...item, quanlity: status };
          }
          return item;
        });
        setdata(updatedCart);
        console.log(data);
        dispatch(fetchCart());
      })
      .catch((error) => {
        console.error('Lỗi cập nhật số lượng:', error);
      });
    } else {
      // Nếu sản phẩm chưa tồn tại, thêm sản phẩm vào giỏ hàng
      const newProduct = { ...Item, quanlity: 1 };
      dispatch(addProductApi(newProduct))
        .then(() => {
          Alert.alert('Đã thêm vào giỏ hàng');
          console.log('Product added successfully!');
        })
        .catch((error) => {
          console.error('Error adding product:', error);
        });
    }
  };

  return(
    <View style={{justifyContent:'center',flex:1,padding:10 }}>
      
    <Image source={{ uri: Item.image }} style={{ flex: 4 }} resizeMode='cover' />
    <View style={{ position: 'absolute', top: 10, left: 10, flexDirection: 'row',justifyContent:'space-between',width:"90%",margin:5 }}>
      <TouchableOpacity onPress={()=>props1.navigation.goBack()}  style={{ width: 40, height: 40, borderRadius: 40, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center', opacity: 0.5 }}>
        <Icon name='arrow-back' size={30} color='#fff' />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>handleToggleFavorites(Item.id,Item.fv)}  style={{ width: 40, height: 40, borderRadius: 40, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center', opacity: 0.5, marginLeft: 10 }}>
        <Icon name='heart' size={30} color={Item.fv?'red':'#fff'} />
      </TouchableOpacity>
    </View>

 <View style={{flex:6}}>
 <ScrollView 
 style={{}}
 
     >
  
   <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:20}}>
   <Text style={{fontSize:25,fontWeight:'700',color:'orange',padding:5,}}>{Item.title}</Text>
  
   </View>
   <View style={{backgroundColor:"orange",borderRadius:20}}>
   <View style={{backgroundColor:'#FACACA',width:'100%',borderTopLeftRadius:20,borderTopRightRadius:20,padding:10}}>
   <Text style={{fontSize:20,fontWeight:'700',color:'#000',padding:5}}>Chi tiết</Text>
   </View>
   <Text style={{fontSize:14,color:'#000',padding:5,textAlign: 'justify', textAlignVertical: 'center',margin:15 }}>{Item.deception}</Text>
   </View>
   <View style={{}}> 

   <TouchableOpacity onPress={()=>{handleAddTodo()}}  style={{height:50,backgroundColor:'orange',alignItems:'center',justifyContent:'center',borderRadius:20,margin:10,alignSelf:'center',padding:10}}> 
    <Text  style={{fontSize:18,fontWeight:'bold',color:'#fff'}}>{Item.price} $ / ADD TO CART</Text>
   </TouchableOpacity>
  <View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'center',marginTop:20}}>
  <TextInput
    multiline
    placeholder="Nhập đánh giá của bạn..."
    maxLength={200}
   
   
    style={{ height: 50, paddingHorizontal: 10, borderColor: 'gray', borderWidth: 1,borderRadius:20,width:'80%' }}
  />
  <Icon name='send' size={30} color='orange' />
  </View>

  <Text style={{margin:10}}>Xem đánh giá</Text>
   </View>
  
  
   
  
  </ScrollView>
 
 </View>
</View>

  )

}



const DetailScreen = (props) => {



    const { item } = props.route.params;
   
    
  
  return (
   <Provider store={store} >
    <Detail item={item} props1={props}/>


   </Provider>
  )
}

export default DetailScreen; 