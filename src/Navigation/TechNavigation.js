import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from '../Screens/Login';
import HomeScreen from '../Screens/Products/HomeScreen/HomeScreen';
import ProductView from '../Screens/Products/ProductView/ProductView';
import FullProductView from '../Screens/Products/ProductFullView/ProductFullView';
import CartView from '../Screens/Products/CartView/CartView';

export default function TechNavigation(props) {

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName={'Login'} screenOptions={{ headerShown: false }} >
      <Stack.Screen
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="Products"
        component={HomeScreen}
      />
      <Stack.Screen
        name="ProductView"
        component={ProductView}
      />
      <Stack.Screen
        name="ProductFullView"
        component={FullProductView}
      />
      <Stack.Screen
        name="CartView"
        component={CartView}
      />
    </Stack.Navigator>
  );
}
