import { View, Text } from 'react-native'
import React from 'react'
import store from '../redux/store/Store'
import Home from '../../component/home'
import {Provider} from 'react-redux'
import Favorite from '../../component/Favorite'
import ThucDon from '../../component/ListProducts'

const ThucdonScreen = () => {
  return (
   <Provider store={store}>
   <ThucDon/>


   </Provider>
  )
}

export default ThucdonScreen; 