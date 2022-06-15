import 'react-native-gesture-handler';
import React from 'react'
import { Text, View } from 'react-native'
import { HomeScreen } from './src/screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/navigator/Navigator';

const App = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  )
}

export default App
