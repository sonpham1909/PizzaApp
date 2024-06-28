import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CRSOL from './CRSOL'
import Header from '../Header'
import { SafeAreaView } from 'react-native-safe-area-context';
import Product from '../products';
import Icon from 'react-native-vector-icons/Ionicons';
import auth,{ FirebaseAuthTypes } from '@react-native-firebase/auth';
import { fetchProducts } from '../../src/redux/action/ActionProducts';
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import { fetchCart } from '../../src/redux/action/ActionCart';


const Home = (props) => {
  const navigation = useNavigation();
  const url_api = process.env.API_URL;
  const [initializing, setinitializing] = useState(true);
  const [user1, setUser] = useState<FirebaseAuthTypes.User | null>();
  const [EmailInput, setEmailInput] = useState('');
  const  listTodo =  useSelector(state => state.listProduct.listProducts);
  const  listCart =  useSelector(state => state.listCart.listCart);

  useEffect(()=>{
    const subscriber = auth().onAuthStateChanged(userState=>{
    setUser(userState);
    if(initializing){
    setinitializing(false);
  
    
    }
    });
    
    return subscriber;
    
    },[]);
    const dispatch = useDispatch();// của redux

    
   useEffect(() => {
    dispatch(fetchProducts());
    console.log(listTodo);
    
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCart());
    console.log(listTodo);
    
  }, [dispatch]);
  return (
  <ScrollView style={{backgroundColor:'#fcfcfc'}}>
     <SafeAreaView style={{flex:1}}>
     
    <Header styll={{margin:10}} email={user1?.email} fc={()=>navigation.navigate('Cart')} im_url={require('../images/logopz.png')}/>
   {
    (listCart.length !==0)?(
      <View style={{width:15,height:15,borderRadius:20,backgroundColor:'red',alignItems:'center',justifyContent:'center',position:'absolute',right:15,top:10 }}>
      <Text style={{fontSize:8,color:'#ffffff'}}>{listCart.length}</Text>
    </View>
    ):(
      null
    )
   }
    <CRSOL/>
  <View style={{flexDirection:'row',margin:10,alignItems:'center'}}>
  <Icon name="cube" size={30} color="green" />
    <Text style={{fontSize:20,fontWeight:'700',color:'orange',margin:10}}>Sản phẩm mới</Text>

  </View>
  <Product url_api={`http://192.168.0.103:3000/products`} />
  <View style={{flexDirection:'row',margin:10,alignItems:'center'}}>
  <Icon name="flame" size={30} color="red" />
    <Text style={{fontSize:20,fontWeight:'700',color:'red',margin:10}}>Sản phẩm cháy hàng</Text>
  </View>
  <Product url_api={`http://192.168.0.103:3000/products`} />
  <View style={{flexDirection:'row',margin:10,alignItems:'center'}}>
  <Icon name="eye" size={30} color="red" />
    <Text style={{fontSize:20,fontWeight:'700',color:'red',margin:10}}>Sản phẩm đã xem</Text>
  </View>
  <Product url_api={`http://192.168.0.103:3000/products`} />

   </SafeAreaView>
  </ScrollView>
   
   
  )
}

export default Home