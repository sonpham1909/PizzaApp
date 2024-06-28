// import { View, Text } from 'react-native'
// import *as React from 'react';
import Login from './src/Login'
// import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Signup from './src/Signup'
import Main from './src/Main';
import AuthenticationScreen from './src/ResetPass';

// const Stack = createNativeStackNavigator();
// const App = () => {
//   return (
//    <NavigationContainer>
//     <Stack.Navigator>
//       <Stack.Screen name='Login' component={Login} />
//       <Stack.Screen name='Signup' component={Signup} />
//       <Stack.Screen name='Main' component={Main} />
//       <Stack.Screen name='Resetpass' component={AuthenticationScreen} />
//     </Stack.Navigator>
//    </NavigationContainer>
//   )
// }

// export default App

import *as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GioithieuSV from './component/GioithieuSV';
import GioithieuApp from './component/GioithieuApp';
// import Login from './component/Login';
// import Signup from './component/Signup';
import Home from './component/home';
import BottomTabNavigator from './component/BottomTab';
import DetailProduct from './component/DetailProduct';
import Product from './component/products';
import ListProduct from './component/ListProducts';
import LoginScreen from './component/Signup1';
import AuthLoadingScreen from './src/IsLoadingLogin';
import DetailScreen from './src/screens/DetailScreen';
import CartScreen from './src/screens/CartScreen';




const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='IsLogin'>

      <Stack.Screen name='IsLogin' component={AuthLoadingScreen}
        options={{headerShown:false}}/>



      <Stack.Screen name='Login' component={Login}   options={{headerShown:false}} />
    <Stack.Screen name='Signup' component={Signup} />
    <Stack.Screen name='Main' component={Main} />
     <Stack.Screen name='Resetpass' component={AuthenticationScreen} />
     
        
        

      <Stack.Screen name='GTSV' component={GioithieuSV}
        options={{headerShown:false}}/>
         <Stack.Screen name='Cart' component={CartScreen}
        options={{headerShown:false}}/>
        <Stack.Screen name='Product' component={Product}
        options={{headerShown:false}}/>
          <Stack.Screen name='DetailProduct' component={DetailScreen}
        options={{headerShown:false}}/>
      <Stack.Screen name='Bottomtab' component={BottomTabNavigator} 
      options={{headerShown:false}}/>
      {/* <Stack.Screen name='Signup' component={Signup} 
      options={{headerShown:false}}/>  */}
     
      <Stack.Screen name='GTAPP' component={GioithieuApp}
         options={{headerShown:false}} />
        
      {/* <Stack.Screen name='Login' component={Login} 
      options={{headerShown:false}}/>  */}
      <Stack.Screen name='ListProduct' component={ListProduct}
        options={{headerShown:false}}/>
    
       
       
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

