import { View, Text } from 'react-native'
import React from 'react'
import store from '../redux/store/Store'
import Home from '../../component/home'
import {Provider} from 'react-redux'
import Favorite from '../../component/Favorite'

const FavoritesScreen = () => {
  return (
   <Provider store={store}>
   <Favorite/>


   </Provider>
  )
}

export default FavoritesScreen; 