import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { fetchProducts } from '../../src/redux/action/ActionProducts';
import { useDispatch, useSelector } from "react-redux";





const Product = ({ url_api }) => {
  const listTodo = useSelector((state) => state.listProduct.listProducts);
  const navigation = useNavigation();
  const [data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    console.log(listTodo);
  }, [listTodo]);

  useEffect(() => {
    setdata(listTodo);
  }, [listTodo]);

  const renderItem = ({ item }) => {
    return (
    <TouchableOpacity
    onPress={() => {
    navigation.navigate('DetailProduct', { item }); // Pass the selected item to the DetailProduct screen
    }}
    style={styles.container}
    >
    <Image source={{ uri: item.image }} style={styles.image} />
    <View style={{ width: '100%', padding: 10 }}>
    <Text style={{ fontSize: 17, fontWeight: '600', color: 'orange' }}>{item.title}</Text>
    <Text style={{ fontSize: 14, fontWeight: '500', color: 'red', marginTop: 10 }}>{item.price}</Text>
    </View>
    <TouchableOpacity style={styles.chitiet}>
    <Icon name="add" size={30} color="#ffffff" />
    </TouchableOpacity>
    </TouchableOpacity>
    );
    };

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        horizontal={true}
      />
    </View>
  );
};
export default Product;