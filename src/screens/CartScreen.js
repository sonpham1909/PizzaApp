import { View, Text, TouchableOpacity, FlatList, Image, TextInput, Pressable, Modal, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import store from '../redux/store/Store'
import Home from '../../component/home'
import {Provider} from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons';
import Favorite from '../../component/Favorite'
import { useNavigation } from '@react-navigation/native';
import { deleteAllProductsApi, deleteProductApi, fetchCart, fetchProducts, toggleTodoApi } from '../redux/action/ActionCart'
import { useDispatch, useSelector } from "react-redux";


const CartScreen = (props) => {
    const Cart = ()=>{
        const [data, setdata] = useState([]);
       

const listCart = useSelector(state => state.listCart.listCart);
const [VisiableM, setVisiableM] = useState(false);

const navigation = useNavigation();
const [totalAmount, setTotalAmount] = useState(0);
useEffect(() => {
    // Tính tổng số tiền
    const amount = data.reduce((total, item) => total + item.price * item.quanlity, 0);
    setTotalAmount(amount);
  }, [data]);



  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchCart());
    console.log(listCart);
  },[dispatch,handleThanhtoan])

  useEffect(() => {
    setdata(listCart);
    console.log(data);
  }, [listCart,handleThanhtoan])


  const handleThanhtoan = async ()=>{
   
    dispatch(deleteAllProductsApi());
    setVisiableM(false);
    Alert.alert('Thanh toán thành công!');
      }

  
  


  
  const renderItem = ({item})=>{
    const updateQuantity = (itemId, newQuantity) => {
        dispatch(toggleTodoApi({ id: itemId, status: newQuantity }));
      };
      const handleToggleFavorites = (id, newQuantity) => {
        // Tạo đối tượng dữ liệu để cập nhật
        const updatedData = data.map(item => {
          if (item.id === id) {
            return { ...item, quanlity: newQuantity };
          }
          return item;
        });
        
      
        // Cập nhật state và hiển thị số lượng mới
      
      
        // Dispatch action để cập nhật số lượng
        dispatch(toggleTodoApi({ id: id, status: newQuantity }))
          .then(result => {
            console.log('Update quantity successfully!');
          })
          .catch(error => {
            console.error('Error updating quantity:', error);
          });
      };

     
    
      const handleToggleFavorites1 = (id, status) => {
        // Dispatch action để cập nhật trạng thái yêu thích
        dispatch(toggleTodoApi({ id: id, data: {...item ,quanlity: status } }))
          .then((result) => {
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
      };

      const handleDeleteTodo =async (id)=>{


        dispatch(deleteProductApi(id))
            .then((result) => {
                console.log('Todo deleted successfully!');
            })
            .catch((error) => {
                console.error('Error deleting todo:', error);
            });
     
 
 
    }
    
 
       
   


    
      return(
        <TouchableOpacity  onPress={() => {
          navigation.navigate('DetailProduct', { item }); // Pass the selected item to the DetailProduct screen
        }}>
            <View style={{flexDirection:'row',margin:10,borderWidth:1,borderColor:'orange',borderRadius:12}}>
           
           <Image source={{uri: item.image}} style={{width:100,height:100,borderRadius:12,margin:5}}/>
           

          <View style={{width:"100%",padding:10}}>
          <Text  numberOfLines={2}  style={{fontSize:15,fontWeight:'600',color:"orange"}}>{item.title}</Text>
            <Text style={{fontSize:14,fontWeight:'500',color:"red",marginTop:10}}>{item.price}</Text>

            <View style={{
                marginTop:10,
                flexDirection:'row'
            }}>

            <TouchableOpacity 
                onPress={() =>{
                    if(item.quanlity>1){
                        handleToggleFavorites1(item.id, item.quanlity - 1)
                    }
                }} style={{
                    alignItems:'center',
                    justifyContent:'center',
                    height:30,
                    
                    backgroundColor:'orange',
                    width:30
                }}>

                    <Icon name='remove' size={20} color="#fff"/>
                </TouchableOpacity>

                <TextInput
  style={{
    width: 40,
    height: 30,
    borderColor: 'orange',
    borderWidth: 1,
    fontSize: 9,
    textAlign: 'center', // căn giữa theo chiều ngang
    textAlignVertical: 'center', // căn giữa theo chiều dọc
  }}
  value={item.quanlity ? item.quanlity.toString() : ''}
/>

                <Pressable onPress={() =>{
                    if(item.quanlity<20){
                        handleToggleFavorites1(item.id, item.quanlity + 1)
                    }
                }} style={{
                    alignItems:'center',
                    justifyContent:'center',
                    height:30,
                    
                    backgroundColor:'orange',
                    width:30
                }}>
                    <Icon name='add' size={20} color="#fff"/>
                </Pressable>
            </View>
         
          </View>
          <TouchableOpacity onPress={()=>{
            handleDeleteTodo(item.id);
          }} style={{position:'absolute',top:40,right:-1}}>
          <Icon  name="trash" size={30} color="red" />

          </TouchableOpacity>

       
         
         
        </View>



        <Modal transparent visible={VisiableM}>
  <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
  <View style={{borderColor:'red',margin:10, backgroundColor:'#fff',borderRadius:12,padding:10}}>

<Text style={{fontSize:20,textAlign:'center',fontWeight:'700',}}>
  Xác nhận thanh toán: {totalAmount} VND ?
</Text>
<View style={{flexDirection:'row',justifyContent:'space-between',padding:40}}>


<TouchableOpacity onPress={()=>{
  setVisiableM(false);
}} style={{width:70,height:40,backgroundColor:"red",justifyContent:'center',alignItems:'center',borderRadius:12}}>
    <Text style={{fontSize:15,fontWeight:'600'}}>
      Hủy
    </Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=>{
    handleThanhtoan();
   
    
  }} style={{width:70,height:40,backgroundColor:'orange',alignItems:'center',justifyContent:'center',borderRadius:12}}>
    <Text   style={{fontSize:15,fontWeight:'600'}}>
      Xác nhận
    </Text>
  </TouchableOpacity>
</View>
</View>

  </View>

</Modal>

        </TouchableOpacity>

      
      );

    
    

    }

    
  



        return(


          //Modal


          
            <View style={{flex:1}}>





            <View style={{flexDirection:'row',alignItems:'center',margin:5}}>
              <TouchableOpacity onPress={()=>props.navigation.goBack()}>
              <Icon name='arrow-back' size={24} color='#000' />
    
              </TouchableOpacity>
            <Text style={{color:'#000',fontSize:17,textAlign:'center',alignSelf:'center',marginLeft:15}}>Giỏ hàng ({data.length} )</Text>
    
            </View>
    
            <View style={{
                height:'12%',
                backgroundColor:'orange',
                flexDirection:'row',
                alignItems:'center'
            }}>
              <View style={{
               marginLeft:5,
            
              }}>
              <Text style={{color:'black', fontWeight:'700'}}>Tổng tiền: {totalAmount} VND</Text>
                <Text>Số sản phẩm: {data.length}</Text>
              </View>
              <TouchableOpacity 
              onPress={()=>{
                setVisiableM(true);
              }} style={{position:'absolute',right:20,padding:10,backgroundColor:'#fff',width:'30%',alignItems:'center',justifyContent:'center',borderRadius:12,shadowColor:'#000',shadowOpacity:0.5,shadowOffset:{width:10,height:10},shadowRadius:'12'}}>
                <Text style={{
                    color:'orange',
                    fontSize:15,
                    fontWeight:'bold',
    
                }}>
                    Thanh toán
                </Text>
              </TouchableOpacity>
    
            </View>
            <FlatList
      
      data={data}
      keyExtractor={item=>item.id}
      renderItem={renderItem}/>
    

            
        </View>
        );
    }
    

  return (
   <Provider store={store}>
    <Cart/>
   
   


   </Provider>
  )
}

export default CartScreen; 