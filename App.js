import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import InputUI from './components/InputUI';
import Mwebview from './components/Mwebview';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {

  return (
    <>
      <StatusBar hidden={true} />

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="InputUI"
            component={InputUI}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="myWebview"
            component={Mwebview}
            options={{headerShown: false}}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
