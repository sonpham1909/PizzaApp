import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './home';
import Favorite from './Favorite';
import Icon from 'react-native-vector-icons/Ionicons';
import ListProduct from './ListProducts';
import {Text } from 'react-native';
import SettingTab from './SettingTab'
import HomeScreen from '../src/screens/HomeScreen';
import FavoritesScreen from '../src/screens/FavoritesScreen';
import ThucdonScreen from '../src/screens/ThucDonScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        headerShown:false,
        
        tabBarLabel: ({ focused, color }) => {
          let label;
          if(route.name === 'Home'){
            label=focused?'Trang chủ':'';
            color='orange'
          }else if(route.name === 'Favorite'){
            label=focused?'Yêu thích':'';
            color='red'
          }else if(route.name === 'ListProduct'){
            label=focused?'Thực đơn':'';
            color='orange'
          }
          else if(route.name === 'Setting'){
            label=focused?'Cài đặt':'';
            color='orange'}
          return <Text style={{color:color,fontSize:16,fontWeight:'500'}}>{label}</Text>


        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Favorite') {
            iconName = focused ? 'heart' : 'heart-outline';
            color='red'
          }else if (route.name === 'ListProduct') {
            iconName = focused ? 'pizza-sharp' : 'pizza-outline';
            
            color='orange'
          }else if (route.name === 'Setting') {
            iconName = focused ? 'settings-sharp' : 'settings-outline';
            
            color='orange'
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        style: {
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          borderRadius: 30,
          backgroundColor: '#ffffff',
          elevation: 8,
          height: 60,
          
        },
        

      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="ListProduct" component={ThucdonScreen}
      style={{borderRadius:20,borderWidth:1,borderColor:'orange',width:50,height:50}}
       />
      <Tab.Screen name="Favorite" component={FavoritesScreen} />
      <Tab.Screen name="Setting" component={SettingTab} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;