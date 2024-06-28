import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { fetchProducts, toggleTodoApi, toggleproApi } from '../src/redux/action/ActionProducts';
import { useDispatch, useSelector } from "react-redux";

const Favorite = () => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const listTodo = useSelector((state) => state.listProduct.listProducts);

  let url_api = `${process.env.API_URL}/products`;
  const [data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [rerenderFlag, setRerenderFlag] = useState(false); // Biến đánh dấu để render lại
  const [keyExtractorFlag, setKeyExtractorFlag] = useState(0); // Biến đếm để thay đổi keyExtractor

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    console.log(listTodo);
    setdata(listTodo);
  }, [listTodo]);

  useEffect(() => {
    if (isFocused) {
      setRerenderFlag(!rerenderFlag); // Đảo ngược giá trị biến đánh dấu khi component được focus
    }
  }, [isFocused]);

  useEffect(() => {
    // Thay đổi giá trị keyExtractorFlag khi listTodo thay đổi
    setKeyExtractorFlag((prevFlag) => prevFlag + 1);
  }, [listTodo]);

 

  const renderItem = ({ item }) => {
    const handleToggleFavorites = (id) => {
      // Tạo đối tượng dữ liệu để cập nhật
      const updatedData = { ...item, fv: false};
      
    
      // Dispatch action để cập nhật trạng thái yêu thích
      dispatch(toggleproApi({ id: id, data: updatedData }))
        .then((result) => {
          console.log('Todo update status successfully!');
        })
        .catch((error) => {
          console.error('Error update todo:', error);
        });
    };
  
    if (item.fv) {
      const maxLength = 20; // Số ký tự tối đa bạn muốn hiển thị
      const text = item.title;
    
      let limitedText = text;
      if (text.length > maxLength) {
        limitedText = text.substring(0, maxLength) + "...";
      }
    
      return (
        <TouchableOpacity onPress={() => {
          navigation.navigate('DetailProduct', { item });
        }}>
          <View style={{ flexDirection: 'row', margin: 10, borderWidth: 1, borderColor: 'orange', borderRadius: 12 }}>
            <Image source={{ uri: item.image }} style={{ width: 100, height: 100, borderRadius: 12, margin: 5 }} />
            <View style={{ width: "100%", padding: 10 }}>
              <Text style={{ fontSize: 17, fontWeight: '600', color: "orange" }}>{limitedText}</Text>
              <Text style={{ fontSize: 14, fontWeight: '500', color: "red", marginTop: 10 }}>{item.price}</Text>
            </View>
            <TouchableOpacity onPress={()=>{handleToggleFavorites(item.id)}}  style={{ position: 'absolute', top: 40, right: -1 }}>
              <Icon name="close" size={30} color="red" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      );
    }
  }

  return (
    <SafeAreaView style={{flex:1}}>
      <Text style={{ fontSize: 20, fontWeight: '600', color: "orange", textAlign: 'center', margin: 10 }}>Sản phẩm yêu thích</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id + keyExtractorFlag} // Thêm keyExtractorFlag vào keyExtractor
        renderItem={renderItem}
      />
    </SafeAreaView>
  )
}

export default Favorite

const styles = StyleSheet.create({})