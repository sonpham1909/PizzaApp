import { View, Text } from 'react-native'
import React from 'react'
import store from '../redux/store/Store'
import Home from '../../component/home'
import {Provider} from 'react-redux'

const HomeScreen = () => {
  return (
   <Provider store={store}>
   <Home/>


   </Provider>
  )
}

export default HomeScreen; 