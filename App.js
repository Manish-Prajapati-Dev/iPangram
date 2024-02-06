import { View, Text } from 'react-native'
import React from 'react'
import TechNavigation from './src/Navigation/TechNavigation'
import { NavigationContainer } from '@react-navigation/native'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import RootReducer from './src/redux/RootReducer'

export const store = configureStore({
  reducer: RootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default function App() {

  return (
    <View style={{ flex: 1, }} >
      <Provider store={store}>
        <NavigationContainer>
          <TechNavigation />
        </NavigationContainer>
      </Provider>
    </View>
  )
}

